import React, { ReactNode } from "react"
import { Input, Select } from "../../../components/FormElements"
import { wireChart, Wire, WireSize, WireType } from "../../../data/wire"
import { MinWireSizeResults, MinWireTable } from "./utils"


export function SelectCalcFrom({handleSelectCalcFrom}) {
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


export function CalcWireType({handleSelectWireType}) {
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



export function SelectWireSize({handleSelectWireSize}) {
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



export function EnterAmps({handleEnterAmps}) {
    return (
        <>
            <span className="text-lg font-semibold">
                Ampacity:
            </span>
            <Input type="number" onChange={handleEnterAmps} />
        </>
    )
}


export function WireSizeResults({
    currentWire, wireSize
} : {
    currentWire : {[key : string] : Wire | undefined},
    wireSize : string
}) {
    return (
        <div className="grid gap-4 col-span-2">
            <div className="font-semibold text-xl col-span-2">Results for {wireSize}</div>

            { (wireSize === '14awg' || wireSize === '12awg' || wireSize === '10awg') &&
                <div className="col-span-2 border border-sky-300 rounded-xl px-4  py-2 text-sky-800">
                    <span className="font-bold">
                        Note: 
                    </span>
                    <p>
                        See rule 14-104. Overcurrent devices may be required to be smaller than allowed ampacity.
                    </p>
                </div>
            }

            <ResultTable 
                results={currentWire.table1} 
                tableTitle="Table 1 - Single Copper Conductors, Free Air"
            />
            <ResultTable 
                results={currentWire.table2} 
                tableTitle="Table 2 - 1-3 Copper Conductors in Raceway or Cable"
            />
            <ResultTable 
                results={currentWire.table3} 
                tableTitle="Table 3 - Single Aluminum Conducors, Free Air"
            />
            <ResultTable 
                results={currentWire.table4} 
                tableTitle="Table 4 - 1-3 Aluminum Conductors in a Raceway or Cable"
            />
        </div>
    )
}




export function AmpsResults({
    amps, minWireSizeResults
} : {
    amps : number, 
    minWireSizeResults : MinWireSizeResults
}) {
    return (
        <div className="grid gap-4 col-span-2">
            <div className="font-semibold text-xl">Results for {amps} amps</div>

            <ResultTable 
                results={minWireSizeResults.table1} 
                tableTitle="Table 1 - Single Copper Conductors, Free Air"
            />
            <ResultTable 
                results={minWireSizeResults.table2} 
                tableTitle="Table 2 - 1-3 Copper Conductors in Raceway or Cable"
            />
            <ResultTable 
                results={minWireSizeResults.table3} 
                tableTitle="Table 3 - Single Aluminum Conducors, Free Air"
            />
            <ResultTable 
                results={minWireSizeResults.table4} 
                tableTitle="Table 4 - 1-3 Aluminum Conductors in a Raceway or Cable"
            />
        </div>
    )
}




export function ResultTable({
    results, tableTitle
} : {
    results : MinWireTable | Wire | undefined
    tableTitle : string
}) {

    if( results === undefined ) return <></>

    return (
        <table className="rounded-lg border border-sky-200 col-span-2">
            <thead className="bg-sky-100 text-lg border-b border-sky-200 font-semibold">
                <tr>
                    <td colSpan={3} className="p-4">
                        {tableTitle}
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
                    <td className="p-4">{results[60] as ReactNode }</td>
                    <td className="p-4">{results[75] as ReactNode }</td>
                    <td className="p-4">{results[90] as ReactNode}</td>
                </tr>
            </tbody>
        </table>
    )
}


