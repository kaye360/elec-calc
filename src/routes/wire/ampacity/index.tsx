import React, { SyntheticEvent, useState } from "react"
import Main from "../../../layout/Main"
import PageHeading from "../../../components/PageHeading"
import { FormGrid } from '../../../components/FormElements'
import { calcMinWireSizeFromAmps } from "./_utils"
import { SelectCalcFrom, SelectWireSize, EnterAmps, WireSizeResults, AmpsResults, AmpacityResults } from "./_components"
import { WireSize, isValidWireSize } from "../../../data/wireSize"
import { wireAmpacityTable } from "../../../data/wireAmpacity"
import { isHTMLInputElement, isHTMLSelectElement } from "../../../utils/form"

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
            <PageHeading>Ampacity</PageHeading>{wireSize}

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
                    <AmpsResults amps={amps} results={minWireSizeResults}/>
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

    const isValidCalcValue = (value: any) => ['ampacity', 'wireSize', 'initial'].includes(value)

    function handleSelectCalcFrom(e: SyntheticEvent) {
        if( !isHTMLSelectElement(e.target)    ) return
        if( !isValidCalcValue(e.target.value) ) return

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
    const isWireSizeReady         = calcFrom === 'wireSize'
    
    function handleSelectWireSize(e: SyntheticEvent) {
        if( !isHTMLSelectElement(e.target) ) return
        if( !isValidWireSize(e.target.value, 'initial') ) return
        setWireSize( e.target.value as WireSize )
    }


    /**
     * Step 2b: Enter Amps
     */
    const [amps, setAmps] = useState<number>(0)
    const isAmpsReady     = calcFrom === 'ampacity'
    const isValidAmpsValue = (value : string) : boolean => !isNaN( Number(value) ) || Number(value) >= 0

    function handleEnterAmps(e: SyntheticEvent) {
        if( !isHTMLInputElement(e.target) ) return
        if( !isValidAmpsValue(e.target.value) ) return
        setAmps( Number(e.target.value) )
    }


    /**
     * Step 3a: Wire size results
     */
    const currentWire : {[key:string] : AmpacityResults} = {
        table1 : wireAmpacityTable.table1.find( wire => wire.size == wireSize ) as AmpacityResults,
        table2 : wireAmpacityTable.table2.find( wire => wire.size == wireSize ) as AmpacityResults,
        table3 : wireAmpacityTable.table3.find( wire => wire.size == wireSize ) as AmpacityResults,
        table4 : wireAmpacityTable.table4.find( wire => wire.size == wireSize ) as AmpacityResults,
    }
    const isWireSizeResultsReady = (calcFrom === 'wireSize') && isValidWireSize(wireSize) && wireSize !== 'initial'

    
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
