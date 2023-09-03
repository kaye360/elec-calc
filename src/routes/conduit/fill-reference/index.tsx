import React, { SyntheticEvent, useEffect, useState } from "react";
import Main from "../../../layout/Main";
import PageHeading from "../../../components/PageHeading";
import { FormGrid, Select } from '../../../components/FormElements'
import { conduitFillTableTitles, conduitFillTables } from "../../../data/conduit";
import { WireSize, wireSizes } from "../../../data/wire";
import { useAnimate } from "framer-motion";

export default function ConduitFillReference() {

    const [wireTable, setWireTable] = useState<string>('')
    const [wireSize, setWireSize] = useState<WireSize | ''>('')

    let results = wireTable && wireSize ? (
        conduitFillTables[wireTable][wireSize]
    ) : (
        ''
    )

    function handleChangeWireTable(e: SyntheticEvent) {
        if (!(e.target instanceof HTMLSelectElement)) return

        if (e.target.value === 'initial') {
            setWireTable('')
            return
        }
        setWireTable(e.target.value)
    }

    function handleChangeWireSize(e: SyntheticEvent) {
        if (!(e.target instanceof HTMLSelectElement)) return

        if (e.target.value === 'initial') {
            setWireSize('')
            return
        }
        setWireSize(e.target.value as WireSize)
    }

    return (
        <Main>
            <PageHeading>Conduit Fill Reference</PageHeading>


            <FormGrid>
                <label>
                    Wire Type
                    <Select onChange={handleChangeWireTable} value={wireTable}>
                        <option value="initial">---</option>
                        {Object.keys(conduitFillTables).map(table => (
                            <option value={table} key={table}>
                                {conduitFillTableTitles[table]}
                            </option>
                        ))}
                    </Select>
                </label>

                <label>
                    Wire Size
                    <Select onChange={handleChangeWireSize} value={wireSize}>
                        <option value="initial">---</option>
                        {wireSizes.map(wireSize => (
                            <option value={wireSize} key={wireSize}>{wireSize}</option>
                        ))}
                    </Select>
                </label>

                {results && (
                    <ResultsTable>
                        <ResultsRow left='1/2"' right={results["0.5"]} />
                        <ResultsRow left='3/4"' right={results["0.75"]} />
                        <ResultsRow left='1"' right={results[1]} />
                        <ResultsRow left='1 1/4"' right={results["1.25"]} />
                        <ResultsRow left='1 1/2"' right={results["1.5"]} />
                        <ResultsRow left='2"' right={results[2]} />
                        <ResultsRow left='2 1/2"' right={results["2.5"]} />
                        <ResultsRow left='3"' right={results[3]} />
                    </ResultsTable>

                )}

            </FormGrid>

        </Main>
    )
}




function ResultsTable({ children }: { children: any }) {

    const [scope, animate] = useAnimate()

    useEffect( () => {
        animate('table', { y: [100, 0], opacity : [0, 100] })
    }, children)

    return (
        <div className="col-span-2" ref={scope}>
            <table className="w-full">
                <thead>
                    <tr>
                        <td className="pr-8 font-bold">Conduit Size</td>
                        <td className="font-bold">Number of Wires</td>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}



function ResultsRow({ left, right }: { left: string, right: string | number }) {
    return (
        <tr className="odd:bg-sky-100 dark:odd:bg-sky-950 dark:odd:bg-opacity-30">
            <td className="p-4">{left}</td>
            <td className="p-4">{right}</td>
        </tr>
    )
}