'use client'

import React, { SyntheticEvent, useState } from "react";
import Main from "../../components/Main";
import PageHeading from "../../components/PageHeading";
import { FormGrid, ResetButton, Input } from '../../components/FormElements'


export default function MetricImperialConverter() {

    const { calc, handleChange, handleReset, handleFocus } = useConverter()

    return (
        <Main>

            <PageHeading>Metric Imperial Converter</PageHeading>

            <FormGrid> 

                <ResetButton handleReset={handleReset} />

                <div>
                    <label htmlFor="inches">Inches</label>
                    <Input id="inches" name="inches" value={calc.inches} onChange={handleChange} onFocus={handleFocus} />
                </div>

                <div>
                    <label htmlFor="feet">Feet</label>
                    <Input id="feet" name="feet" value={calc.feet} onChange={handleChange} onFocus={handleFocus} />
                </div>

                <div>
                    <label htmlFor="millimeters">Millimeters</label>
                    <Input id="millimeters" name="millimeters" value={calc.millimeters} onChange={handleChange} onFocus={handleFocus} />
                </div>

                <div>
                    <label htmlFor="meters">Meters</label>
                    <Input id="meters" name="meters" value={calc.meters} onChange={handleChange} onFocus={handleFocus} />
                </div>

            </FormGrid>

        </Main>
    )
} 





function useConverter() {

    interface Calc {
        inches : number | '',
        feet : number | '',
        millimeters : number | '',
        meters : number | '',
        [key: string] : number | ''
    }

    const initialCalc : Calc = {
        inches : 0,
        feet : 0,
        millimeters : 0,
        meters : 0
    }

    const [calc, setCalc] = useState<Calc>(initialCalc)

    
    function handleReset() {
        setCalc(initialCalc)
    }


    function handleFocus(e: SyntheticEvent) {
        if( !(e.target instanceof HTMLInputElement) ) return
        if( !(e.target.id in calc) ) return
        if( e.target.value !== "0" ) return

        const currentInputId = e.target.id

        setCalc({ ...calc, [currentInputId] : ''})
    }


    function handleChange(e : SyntheticEvent) {
        if( !(e.target instanceof HTMLInputElement) ) return
        if( !(e.target.id in calc) ) return
        if( isNaN( Number(e.target.value) ) && e.target.value !== '' ) return

        const currentInputValue = e.target.value === '' ? e.target.value : Number( e.target.value )
        const currentInputValueNumber = Number(currentInputValue)
        const currentInputId = e.target.id
        let newFormState : Calc

        switch( currentInputId ) {

            case 'inches' :
                newFormState = {
                    inches      : currentInputValue,
                    feet        : Number( (currentInputValueNumber / 12).toFixed(2) ),
                    millimeters : Number( (currentInputValueNumber * 25.4).toFixed(2) ),
                    meters      : Number( (currentInputValueNumber / 39.37).toFixed(2) )
                }
                break

            case 'feet' :
                newFormState = {
                    inches      : Number( (currentInputValueNumber * 12).toFixed(2) ),
                    feet        : currentInputValue,
                    millimeters : Number( (currentInputValueNumber * 304.8).toFixed(2) ),
                    meters      : Number( (currentInputValueNumber / 3.281).toFixed(2) ),
                }
                break
            
            case 'millimeters' :
                newFormState = {
                    inches      : Number( (currentInputValueNumber / 25.4).toFixed(2) ),
                    feet        : Number( (currentInputValueNumber / 304.8).toFixed(2) ),
                    millimeters : currentInputValue,
                    meters      : Number( (currentInputValueNumber / 1000).toFixed(2) ),
                }
                break
            
            case 'meters' :
                newFormState = {
                    inches      : Number( (currentInputValueNumber * 39.37).toFixed(2) ),
                    feet        : Number( (currentInputValueNumber * 3.281).toFixed(2) ),
                    millimeters : Number( (currentInputValueNumber * 1000).toFixed(2) ),
                    meters      : currentInputValue,
                }
                break

            default :
                newFormState = initialCalc
        }

        setCalc(newFormState)
    }


    return { calc, handleChange, handleReset, handleFocus }
}