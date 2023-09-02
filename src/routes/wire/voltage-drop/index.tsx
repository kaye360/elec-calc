import React, { useState } from "react"
import { FormGrid, ResetButton, Select, FormResults, Input } from "../../../components/FormElements"
import PageHeading from "../../../components/PageHeading"
import Main from "../../../layout/Main"

export default function VoltageDrop() {

    const { handleChange, handleReset, calc, result } = useVoltageDropCalc()


    return (
        <Main>
            <PageHeading>Voltage Drop</PageHeading>

            <FormGrid> 

                <ResetButton handleReset={handleReset} />

                <div>
                    <label htmlFor="voltage">Voltage</label>
                    <Input id="voltage" name="voltage" value={calc.voltage} onChange={handleChange}  />
                </div>

                <div>
                    <label htmlFor="amps">Amps</label>
                    <Input id="amps" name="amps" value={calc.amps} onChange={handleChange}  />
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
                    <Select id="wireSize" name="wireSize" defaultValue="4110" onChange={handleChange}>
                        <option value="1620">18 AWG</option>
                        <option value="2580">16 AWG</option>
                        <option value="4110">14 AWG</option>
                        <option value="6530">12 AWG</option>
                        <option value="10380">10 AWG</option>
                        <option value="16510">8 AWG</option>
                        <option value="26240">6 AWG</option>
                        <option value="41740">4 AWG</option>
                        <option value="52620">3 AWG</option>
                        <option value="66360">2 AWG</option>
                        <option value="83690">1 AWG</option>
                        <option value="105600">1/0 AWG</option>
                        <option value="133100">2/0 AWG</option>
                        <option value="167800">3/0 AWG</option>
                        <option value="211600">4/0 AWG</option>
                        <option value="250000">250 kcmil</option>
                        <option value="300000">300 kcmil</option>
                        <option value="350000">350 kcmil</option>
                        <option value="400000">400 kcmil</option>
                        <option value="500000">500 kcmil</option>
                        <option value="600000">600 kcmil</option>
                        <option value="700000">700 kcmil</option>
                        <option value="750000">750 kcmil</option>
                        <option value="800000">800 kcmil</option>
                        <option value="900000">900 kcmil</option>
                        <option value="1000000">1000 kcmil</option>
                        <option value="1250000">1250 kcmil</option>
                        <option value="1500000">1500 kcmil</option>
                        <option value="1750000">1750 kcmil</option>
                        <option value="2000000">2000 kcmil</option>
                    </Select>
                </div>

                <div>
                    <label htmlFor="wireType">Wire Type</label>
                    <Select id="wireType" name="wireType" defaultValue="4110" onChange={handleChange}>
                        <option value="12.9">Copper</option>
                        <option value="21.2">Aluminum</option>
                    </Select>
                </div>

                <div>
                    <label htmlFor="distance">Distance (feet)</label>
                    <Input id="distance" name="distance" value={calc.distance} onChange={handleChange} />
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
    voltage : number,
    phase : 1 | 3,
    amps : number,
    wireSize : number,
    wireType : 12.9 | 21.2, // Cu: 12.9, Al: 21.2
    distance : number
}




function useVoltageDropCalc() {


    const initialCalc : Calc = {
        voltage : 120,
        phase : 1,
        amps : 15,
        wireSize : 4110,
        wireType : 12.9,
        distance : 100
    }

    const [calc, setCalc] = useState<Calc>(initialCalc)


    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        if( !(e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) ) return
        if( !(e.target.id in calc) ) return
        if( isNaN( Number(e.target.value) ) && e.target.value !== '' ) return

        const currentInputValue = e.target.value === '' ? e.target.value : Number( e.target.value )
        const currentInputValueNumber = Number(currentInputValue)
        const currentInputId = e.target.id

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




function calcVoltageDrop({phase, wireType, distance, amps, wireSize} : Calc ) : number {

    let voltageDrop = (
        Number(phase) * 
        Number(wireType) * 
        Number(distance) * 
        Number(amps)
    ) /
    Number(wireSize)

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