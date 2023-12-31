import React, { ReactNode } from "react"
import { Input, Select } from "../../../components/FormElements"
import { wireAmpacityTable } from "../../../data/wireAmpacity"


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



export function SelectWireSize({handleSelectWireSize}) {
    return (
        <>
            <span className="text-lg font-semibold">
                Wire Size:
            </span>
            <Select onChange={handleSelectWireSize}>
                <option value="initial">---</option>
                { wireAmpacityTable.table1.map( wire => (
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
    currentWire : {[key : string] : AmpacityResults},
    wireSize : string
}) {

    const hasFootNote = wireSize === '14awg' || wireSize === '12awg' || wireSize === '10awg'

    return (
        <div className="grid gap-4 col-span-2">
            <div className="font-semibold text-xl col-span-2">Results for {wireSize}</div>

            { hasFootNote &&
                <div className="col-span-2 border border-sky-300 dark:border-sky-900 rounded-xl px-4  py-2 text-sky-800 dark:text-sky-200">
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
    amps, results
} : {
    amps : number, 
    results : {[key: string] : AmpacityResults}
}) {
    return (
        <div className="grid gap-6 col-span-2">
            <div className="font-semibold text-xl">Results for {amps} amps</div>

            <ResultTable 
                results={results.table1} 
                tableTitle="Table 1 - Single Copper Conductors, Free Air"
            />
            <ResultTable 
                results={results.table2} 
                tableTitle="Table 2 - 1-3 Copper Conductors in Raceway or Cable"
            />
            <ResultTable 
                results={results.table3} 
                tableTitle="Table 3 - Single Aluminum Conducors, Free Air"
            />
            <ResultTable 
                results={results.table4} 
                tableTitle="Table 4 - 1-3 Aluminum Conductors in a Raceway or Cable"
            />
        </div>
    )
}



export interface AmpacityResults {
    60 : string,
    75 : string,
    90 : string
}


export function ResultTable({
    results, tableTitle
} : {
    results : AmpacityResults
    tableTitle : string
}) {

    if( results === undefined ) return <></>

    return (
        <table className="rounded-xl border-1 border-sky-300 dark:border-sky-800 col-span-2 border-collapse">
            <thead className="bg-sky-200 dark:bg-sky-950 text-lg border-b border-sky-200 dark:border-sky-950 font-semibold rounded-4xl overflow-hidden">
                <tr>
                    <td colSpan={3} className="p-4 bg-sky-300 dark:bg-sky-900">
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


