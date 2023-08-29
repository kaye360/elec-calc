import React, { SyntheticEvent, useEffect, useState } from "react"
import Main from "../../../components/Main"
import PageHeading from "../../../components/PageHeading"
import { FormGrid, Input, Select } from '../../../components/FormElements'
import { Wire, WireSize, WireType, wireChart } from "../../../data/wire"

export default function Ampacity() {

    const { 
        handleSelectCalcFrom,
        wireType, handleSelectWireType, isWireTypeReady,
        wireSize, handleSelectWireSize, isWireSizeReady,
        amps, handleEnterAmps, isAmpsReady,
        currentWire, isWireSizeResultsReady,
        minWireSizes, isAmpsResultsReady
    } = useAmpacity()



    return (
        <Main>
            <PageHeading>Ampacity</PageHeading>

            <FormGrid>
                {/* Step 1: Calc from Ampacity or Wire Size */}
                <SelectCalcFrom handleSelectCalcFrom={handleSelectCalcFrom} />
                
                {/* Step 2: Select Copper or Aluminum */}
                { isWireTypeReady && 
                    <CalcWireType handleSelectWireType={handleSelectWireType} />
                }

                {/* Step 3a: Select Wire Size */}
                { isWireSizeReady &&
                    <SelectWireSize handleSelectWireSize={handleSelectWireSize} />
                }

                {/* Step 3b: Enter Amps */}
                { isAmpsReady &&
                    <EnterAmps handleEnterAmps={handleEnterAmps} />
                }

                {/* Step 4a: Wire size results */}
                { isWireSizeResultsReady && 
                    <WireSizeResults currentWire={currentWire} wireType={wireType} wireSize={wireSize} />
                }

                {/* Step 4b: Ampacity results */}
                { isAmpsResultsReady &&
                    <AmpsResults amps={amps} wireType={wireType} minWireSizes={minWireSizes}/>
                }

                {amps}
            </FormGrid>

        </Main>
    )
}



function SelectCalcFrom({handleSelectCalcFrom}) {
    return (
        <>
            <span className="text-lg font-semibold">
                Calculate from:
            </span>
            <Select onChange={handleSelectCalcFrom}>
                <option value="initial">---</option>
                <option value="ampacity">Ampacity</option>
                <option value="wireSize">Wire Size</option>
            </Select>
        </>
    )
}


function CalcWireType({handleSelectWireType}) {
    return (
        <>
            <span className="text-lg font-semibold">
                Wire Type:
            </span>
            <Select onChange={handleSelectWireType}>
                <option value="initial">---</option>
                <option value="cu">Copper</option>
                <option value="al">Aluminum</option>
            </Select>   
        </>
    )
}



function SelectWireSize({handleSelectWireSize}) {
    return (
        <>
            <span className="text-lg font-semibold">
                Wire Size:
            </span>
            <Select onChange={handleSelectWireSize}>
                <option value="initial">---</option>
                { wireChart.table1.map( wire => (
                    <option value={wire.size} key={wire.size}>{wire.size}</option>
                ) )}
            </Select>

        </>
    )
}



function EnterAmps({handleEnterAmps}) {
    return (
        <>
            <span className="text-lg font-semibold">
                Ampacity:
            </span>
            <Input type="number" onChange={handleEnterAmps} />
        </>
    )
}



function WireSizeResults({
    currentWire, wireSize, wireType
} : {
    currentWire : Wire | undefined,
    wireSize : WireSize,
    wireType : WireType
}) {
    return (
        <table className="rounded-lg border border-sky-200 col-span-2">
            <thead className="bg-sky-100 text-lg border-b border-sky-200 font-semibold">
                <tr>
                    <td colSpan={3} className="text-center">
                        Results for {wireSize} {wireType === 'cu' && 'copper'}{wireType === 'al' && 'aluminum'}
                    </td>
                </tr>
                <tr>
                    <td className="p-4">60 degrees</td>
                    <td className="p-4">75 degrees</td>
                    <td className="p-4">90 degrees</td> 
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="p-4">{currentWire?.[60]}</td>
                    <td className="p-4">{currentWire?.[75]}</td>
                    <td className="p-4">{currentWire?.[90]}</td>
                </tr>
            </tbody>
        </table>
    )
}


/**
 * 
 * 
 * 
 * 
 * 
 * 
 * @todo Make minWireSizes Type Safe
 * 
 * 
 * 
 * 
 * 
 * 
 */
function AmpsResults({
    amps, wireType, minWireSizes
} : {
    amps : number, 
    wireType : WireType,
    minWireSizes : object
}) {
    console.log(minWireSizes)
    return (
        <table className="rounded-lg border border-sky-200 col-span-2">
            <thead className="bg-sky-100 text-lg border-b border-sky-200 font-semibold">
                <tr>
                    <td colSpan={4} className="text-center">
                        Minimum Wire size for {amps} {wireType === 'cu' && 'copper'}{wireType === 'al' && 'aluminum'}
                    </td>
                </tr>
                <tr>
                    <td className="p-4">Aluminum, 1-3 wires</td>
                    <td className="p-4">Aluminum, 4+ wires </td>
                    <td className="p-4">Copper, 1-3 wires</td> 
                    <td className="p-4">Copper, 4+ wires</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="p-4">
                        60deg: {minWireSizes[60].size}<br />
                        75deg: {minWireSizes[75].size}<br />
                        90deg: {minWireSizes[90].size}<br />
                    </td>

                    <td className="p-4">
                        60deg: <br />
                        75deg: <br />
                        90deg: <br />
                    </td>

                    <td className="p-4">
                        60deg: <br />
                        75deg: <br />
                        90deg: <br />
                    </td>

                    <td className="p-4">
                        60deg: <br />
                        75deg: <br />
                        90deg: <br />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}




function useAmpacity() {

    /**
     * Step 1: Calc From Ampacity or Wire Size
     */

    type CalcFrom                 = 'ampacity' | 'wireSize' | 'initial'
    const [calcFrom, setCalcFrom] = useState<CalcFrom>('initial')
    const calcFromValidValues     = ['ampacity', 'wireSize', 'initial']

    function handleSelectCalcFrom(e: SyntheticEvent) {
        if( !(e.target instanceof HTMLSelectElement) ) return
        if( !calcFromValidValues.includes(e.target.value) ) return
        setCalcFrom(e.target.value as CalcFrom)
        if(e.target.value === 'initial') {
            setWireType('initial')
            setWireSize('initial')
            setAmps(0)
        }
    }


    /**
     * Step 2: Select copper or aluminum
     */
    const [wireType, setWireType] = useState<WireType>('initial')
    const wireTypeValidValues     = ['cu', 'al', 'initial']
    const isWireTypeReady         = calcFrom === 'ampacity' || calcFrom === 'wireSize'

    function handleSelectWireType(e: SyntheticEvent) {
        if( !(e.target instanceof HTMLSelectElement) ) return
        if( !wireTypeValidValues.includes(e.target.value) ) return
        setWireType(e.target.value as WireType)
        if(e.target.value === 'initial') {
            setWireSize('initial')
            setAmps(0)
        }
    }


    /**
     * Step 3a: Select wire size
     */
    const [wireSize, setWireSize] = useState<WireSize>('initial')
    const wireSizeValidValues     = ['initial', '14awg', '12awg', '10awg', '8awg', '6awg', '4awg', 
                                     '3awg', '2awg', '1awg', '1/0', '2/0', '3/0', '4/0', '250kcmil', 
                                     '300kcmil', '350kcmil', '400kcmil', '500kcmil', '600kcmil', '700kcmil'
                                    ]
    const isWireSizeReady         = (wireType === 'al' || wireType === 'cu') && calcFrom === 'wireSize'

    function handleSelectWireSize(e: SyntheticEvent) {
        if( !(e.target instanceof HTMLSelectElement) ) return
        if( !wireSizeValidValues.includes(e.target.value)) return
        setWireSize( e.target.value as WireSize )
    }


    /**
     * Step 3b: Enter Amps
     */
    const [amps, setAmps] = useState<number>(0)
    const isAmpsReady     = (wireType === 'al' || wireType === 'cu') && calcFrom === 'ampacity'

    function handleEnterAmps(e: SyntheticEvent) {
        if( !(e.target instanceof HTMLInputElement) ) return
        if( isNaN( Number(e.target.value) ) ) return
        setAmps( Number(e.target.value) )
    }


    /**
     * Step 4a: Wire size results
     */
    const currentWire = wireChart.table1.find( wire => wire.size == wireSize )
    const isWireSizeResultsReady = (wireType === 'al' || wireType === 'cu') && 
                                   (calcFrom === 'wireSize') &&
                                   (wireSizeValidValues.includes(wireSize) && wireSize !== 'initial' )

    
    /**
     * Step 4b: Ampacity results
     */
    const minWireSizes = {
        60 : { size : '', hasMatched : false },
        75 : { size : '', hasMatched : false },
        90 : { size : '', hasMatched : false }
    }
    
    wireChart.table1.forEach( wire => {
        if( wire[60] >= amps && !minWireSizes[60].hasMatched ) {
            minWireSizes[60].size = wire.size
            minWireSizes[60].hasMatched = true
        }
        if( wire[75] >= amps && !minWireSizes[75].hasMatched ) {
            minWireSizes[75].size = wire.size
            minWireSizes[75].hasMatched = true
        }
        if( wire[90] >= amps && !minWireSizes[90].hasMatched ) {
            minWireSizes[90].size = wire.size
            minWireSizes[90].hasMatched = true
        }
    })

    const isAmpsResultsReady = (wireType === 'al' || wireType === 'cu') && 
                               (calcFrom === 'ampacity') &&
                               (amps > 0)
    


    return {
        calcFrom, handleSelectCalcFrom,
        wireType, handleSelectWireType, isWireTypeReady,
        wireSize, handleSelectWireSize, isWireSizeReady,
        amps, handleEnterAmps, isAmpsReady,
        currentWire, isWireSizeResultsReady,
        minWireSizes, isAmpsResultsReady
    }


}