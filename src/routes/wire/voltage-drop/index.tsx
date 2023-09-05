import React, { useState } from "react"
import { FormGrid, ResetButton, Select, FormResults, Input } from "../../../components/FormElements"
import PageHeading from "../../../components/PageHeading"
import Main from "../../../layout/Main"
import { wireMaterials } from "../../../data/wireMaterials"
import { wireCmils } from "../../../data/wireCmils"
import { isHTMLInputElement, isHTMLSelectElement } from "../../../utils/form"

export default function VoltageDrop() {

    const { handleChange, handleReset, calc, result } = useVoltageDropCalc()


    return (
        <Main>
            <PageHeading>Voltage Drop</PageHeading>

            <FormGrid> 

                <ResetButton handleReset={handleReset} />

                <div>
                    <label htmlFor="voltage">Voltage</label>
                    <Input 
                        type="number" 
                        id="voltage" 
                        name="voltage" 
                        value={calc.voltage} 
                        onChange={handleChange}  
                    />
                </div>

                <div>
                    <label htmlFor="amps">Amps</label>
                    <Input 
                        type="number"
                        id="amps" 
                        name="amps" 
                        value={calc.amps} 
                        onChange={handleChange}  
                    />
                </div>

                <div>
                    <label htmlFor="phase">Phase</label>
                    <Select id="phase" name="phase" defaultValue={calc.phase} onChange={handleChange} >
                        <option value={1}>Single Phase</option>
                        <option value={3}>Three Phase</option>
                    </Select>
                </div>

                <div>
                    <label htmlFor="wireSize">Wire Size</label>
                    <Select id="cMils" name="cMils" defaultValue="4110" onChange={handleChange}>
                        { Object.entries(wireCmils).map( wire => (
                            <option value={wire[1]} key={wire[0]}>{wire[0]}</option>
                        ))}
                    </Select>
                </div>

                <div>
                    <label htmlFor="wireType">Wire Type</label>
                    <Select id="wireType" name="wireType" defaultValue="4110" onChange={handleChange}>
                        <option value={wireMaterials.copper.resistance}>Copper</option>
                        <option value={wireMaterials.aluminum.resistance}>Aluminum</option>
                    </Select>
                </div>

                <div>
                    <label htmlFor="distance">Distance (feet)</label>
                    <Input 
                        type="number"
                        id="distance" 
                        name="distance" 
                        value={calc.distance} 
                        onChange={handleChange} 
                    />
                </div>

                <FormResults>
                    Voltage Drop : {result.voltageDrop}v <br />
                    Voltage at Load : {result.voltageLoad}v <br />
                    Percent Drop : {result.percentDrop}%
                </FormResults>

            </FormGrid>

        </Main>
    )
}




interface Calc {
    voltage  : number,
    phase    : 1 | 3,
    amps     : number,
    cMils    : number,
    wireType : 12.9 | 21.2, // Cu: 12.9, Al: 21.2
    distance : number
}




function useVoltageDropCalc() {


    const initialCalc : Calc = {
        voltage  : 120,
        phase    : 1,
        amps     : 15,
        cMils    : 4110,
        wireType : 12.9,
        distance : 100
    }

    const [calc, setCalc] = useState<Calc>(initialCalc)

    const isValidCalcKey   = (e: React.ChangeEvent<HTMLSelectElement>) => e.target.id in calc
    const isValidCalcValue = (e: React.ChangeEvent<HTMLSelectElement>) => 
        !isNaN( Number(e.target.value) ) || e.target.value === ''

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        if( !isHTMLInputElement(e.target) && !isHTMLSelectElement(e.target) ) return
        if( !isValidCalcKey(e)   ) return
        if( !isValidCalcValue(e) ) return
        
        const currentInputValue       = e.target.value === '' ? e.target.value : Number( e.target.value )
        const currentInputValueNumber = Number(currentInputValue)
        const currentInputId          = e.target.id

        setCalc({ ...calc, [currentInputId] : currentInputValueNumber})
    }



    function handleReset() {
        setCalc(initialCalc)
    }


    const voltageDrop = calcVoltageDrop(calc)
    const voltageLoad = calcVoltageLoad({totalVoltage : calc.voltage, voltageDrop})
    const percentDrop = calcPercentDrop({totalVoltage : calc.voltage, voltageDrop})
    const result      = { voltageDrop, voltageLoad, percentDrop }

    return { calc, result, handleChange, handleReset }
}




function calcVoltageDrop({phase, wireType, distance, amps, cMils} : Calc ) : number {

    let voltageDrop = (
        Number(phase) * 
        Number(wireType) * 
        Number(distance) * 
        Number(amps)
    ) /
    Number(cMils)

    return Number(voltageDrop.toFixed(2))
}



function calcVoltageLoad({totalVoltage, voltageDrop} : {[key : string] : number}) : number {
    const voltageLoad = Number(totalVoltage) - Number(voltageDrop)
    return Number( voltageLoad.toFixed(2) )
}



function calcPercentDrop({totalVoltage, voltageDrop} : {[key : string] : number}) : number {
    let percentDrop = ( Number(voltageDrop) / Number(totalVoltage) ) * 100
    return Number( percentDrop.toFixed(2) )
}