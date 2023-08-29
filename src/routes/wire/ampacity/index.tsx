import React, { SyntheticEvent, useState } from "react"
import Main from "../../../components/Main"
import PageHeading from "../../../components/PageHeading"
import { Select } from '../../../components/FormElements'
import { WireSize, WireType, wireChart } from "../../../data/wire"

export default function Ampacity() {

    type CalcFrom = 'ampacity' | 'wireSize' | 'initial'
    const [calcFrom, setCalcFrom] = useState<CalcFrom>('initial')
    const calcFromValidValues = ['ampacity', 'wireSize', 'initial']


    function handleSelectCalcFrom(e: SyntheticEvent) {
        if( !(e.target instanceof HTMLSelectElement) ) return
        if( !calcFromValidValues.includes(e.target.value) ) return
        setCalcFrom(e.target.value as CalcFrom)
    }


    return (
        <Main>
            <PageHeading>Ampacity</PageHeading>

            Calculate from: ampacity or wire size copper or al, up to 3, over 3

            Calculate from:
            <Select onChange={handleSelectCalcFrom}>
                <option value="initial">---</option>
                <option value="ampacity">Ampacity</option>
                <option value="wireSize">Wire Size</option>
            </Select>
            
            { calcFrom === 'ampacity' && <CalcFromAmpacity /> }
            { calcFrom === 'wireSize' && <CalcFromWireSize /> }

        </Main>
    )
}




function CalcFromAmpacity() {
    return (
        <div>
            Calc From Ampacity
        </div>
    )
}




function CalcFromWireSize() {

    const [wireType, setWireType] = useState<WireType>('initial')
    const wireTypeValidValues = ['cu', 'al', 'initial']

    function handleSelectWireType(e: SyntheticEvent) {
        if( !(e.target instanceof HTMLSelectElement) ) return
        if( !wireTypeValidValues.includes(e.target.value) ) return
        setWireType(e.target.value as WireType)
    }


    const [wireSize, setWireSize] = useState<WireSize>(14)
    const wireSizeValidValues = [14, 12, 10, 8, 6, 4, 3, 2, 1, '1/0', '2/0', '3/0', '4/0', 250, 300, 350, 400, 500, 600, 700]

    function handleSelectWireSize(e: SyntheticEvent) {
        if( !(e.target instanceof HTMLSelectElement) ) return
        // Check if ott valid value
        if( isNaN(e.target.value as unknown as number) && !wireSizeValidValues.includes(e.target.value) ) return
        // Check if number valid value
        if( !isNaN(e.target.value as unknown as number) && !wireSizeValidValues.includes( Number(e.target.value) )) return

        setWireSize( e.target.value as WireSize )
    }

    const currentWire = wireChart.table1.find( wire => wire.size == wireSize )

    return (
        <div>
            <Select onChange={handleSelectWireType}>
                <option value="initial">---</option>
                <option value="cu">Copper</option>
                <option value="al">Aluminum</option>
            </Select>

            { (wireType === 'cu' || wireType === 'al') &&
                <Select onChange={handleSelectWireSize}>
                    <option value="initial">---</option>
                    { wireChart.table1.map( wire => (
                        <option value={wire.size}>{wire.size}{wire.suffix}</option>
                    ) )}
                </Select>
            }

            { (wireType === 'cu' || wireType === 'al') && wireSizeValidValues.includes(wireSize) &&
                <table className="w-full rounded-lg border border-sky-200">
                    <thead className="bg-sky-100 text-lg border-b border-sky-200 font-semibold">
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
            }
            
        </div>
    )
}

