import React, { SyntheticEvent, useState } from "react"
import Main from "../../../layout/Main"
import PageHeading from "../../../components/PageHeading"
import { FormGrid } from '../../../components/FormElements'
import { WireSize, wireChart } from "../../../data/wire"
import { calcMinWireSizeFromAmps } from "./_utils"
import { SelectCalcFrom, SelectWireSize, EnterAmps, WireSizeResults, AmpsResults } from "./_components"

export default function Ampacity() {

    const { 
        handleSelectCalcFrom,
        wireSize, handleSelectWireSize, isWireSizeReady,
        amps, handleEnterAmps, isAmpsReady,
        currentWire, isWireSizeResultsReady,
        minWireSizeResults, isAmpsResultsReady
    } = useAmpacity()

    return (
        <Main>
            <PageHeading>Ampacity</PageHeading>

            <FormGrid>
                {/* Step 1: Calc from Ampacity or Wire Size */}
                <SelectCalcFrom handleSelectCalcFrom={handleSelectCalcFrom} />
                
                {/* Step 2a: Select Wire Size */}
                { isWireSizeReady &&
                    <SelectWireSize handleSelectWireSize={handleSelectWireSize} />
                }

                {/* Step 2b: Enter Amps */}
                { isAmpsReady &&
                    <EnterAmps handleEnterAmps={handleEnterAmps} />
                }

                {/* Step 3a: Wire size results */}
                { isWireSizeResultsReady && 
                    <WireSizeResults currentWire={currentWire} wireSize={wireSize} />
                }

                {/* Step 3b: Ampacity results */}
                { isAmpsResultsReady &&
                    <AmpsResults amps={amps} minWireSizeResults={minWireSizeResults}/>
                }
            </FormGrid>
        </Main>
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
            setWireSize('initial')
            setAmps(0)
        }
    }



    /**
     * Step 2a: Select wire size
     */
    const [wireSize, setWireSize] = useState<WireSize | 'initial'>('initial')
    const wireSizeValidValues     = ['initial', '14awg', '12awg', '10awg', '8awg', '6awg', '4awg', 
                                     '3awg', '2awg', '1awg', '1/0', '2/0', '3/0', '4/0', '250kcmil', 
                                     '300kcmil', '350kcmil', '400kcmil', '500kcmil', '600kcmil', '700kcmil'
                                    ]
    const isWireSizeReady         = calcFrom === 'wireSize'

    function handleSelectWireSize(e: SyntheticEvent) {
        if( !(e.target instanceof HTMLSelectElement) ) return
        if( !wireSizeValidValues.includes(e.target.value)) return
        setWireSize( e.target.value as WireSize )
    }


    /**
     * Step 2b: Enter Amps
     */
    const [amps, setAmps] = useState<number>(0)
    const isAmpsReady     = calcFrom === 'ampacity'

    function handleEnterAmps(e: SyntheticEvent) {
        if( !(e.target instanceof HTMLInputElement) ) return
        if( isNaN( Number(e.target.value) ) ) return
        setAmps( Number(e.target.value) )
    }


    /**
     * Step 3a: Wire size results
     */
    const currentWire = {
        table1 : wireChart.table1.find( wire => wire.size == wireSize ),
        table2 : wireChart.table2.find( wire => wire.size == wireSize ),
        table3 : wireChart.table3.find( wire => wire.size == wireSize ),
        table4 : wireChart.table4.find( wire => wire.size == wireSize ),
    }
    const isWireSizeResultsReady = (calcFrom === 'wireSize') && 
                                   (wireSizeValidValues.includes(wireSize) && wireSize !== 'initial' )

    
    /**
     * Step 3b: Ampacity results
     */
    const minWireSizeResults = calcMinWireSizeFromAmps({amps})
    const isAmpsResultsReady = (calcFrom === 'ampacity') && (amps > 0)


    return {
        calcFrom, handleSelectCalcFrom,
        wireSize, handleSelectWireSize, isWireSizeReady,
        amps, handleEnterAmps, isAmpsReady,
        currentWire, isWireSizeResultsReady,
        minWireSizeResults, isAmpsResultsReady
    }
}
