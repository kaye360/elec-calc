import React, { SyntheticEvent, useEffect, useState } from 'react'
import Main from '../../../layout/Main'
import PageHeading from '../../../components/PageHeading'
import { FormGrid, Input, Select, SubmitButton } from '../../../components/FormElements'
import { AddIcon } from '../../../components/Icons'
import { ConduitSize, ConduitTypes, conduitCrossSectionalArea, conduitTypes } from '../../../data/conduit'
import { useAnimate } from 'framer-motion'
import { WireSize, wireSizes } from '../../../data/wireSize'



/**
 * 
 * This route is incomplete. See @todo below
 */



export default function ConduitFillCalculator() {

    interface WireSet {
        amount : number | '',
        wireSize : WireSize | 'initial'
    }

    const [wireSet, setWireSet] = useState<WireSet[]>([])

    function handleAddWireSet() {
        setWireSet( prev => [...prev, { amount : 1, wireSize : 'initial' }])
    }

    function handleUpdateWireSet(index : number, e : SyntheticEvent) {

        if( !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLSelectElement) ) return 

        const inputIsEmptyString    = e.target.tagName === 'INPUT' && e.target.value === ''
        const inputIsPositiveNumber = e.target.tagName === 'INPUT' && Number(e.target.value) >= 0
        const selectIsValidValue    = e.target.tagName === 'SELECT' && [...wireSizes, 'initial'].includes(e.target.value as WireSize)

        setWireSet( prev => {
            
            if( !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLSelectElement) ) return prev
            
            const newWireSet = [...prev]

            if( inputIsEmptyString ) {
                newWireSet[index].amount = ''

            } else if(inputIsPositiveNumber) {
                newWireSet[index].amount = Math.round( Number(e.target.value) )
            }

            if( selectIsValidValue ) {
                newWireSet[index].wireSize = e.target.value as WireSize
            }

            return newWireSet
        })
    }

    const [conduitType, setConduitType] = useState<ConduitTypes | 'initial'>('initial')

    function handleConduitTypeChange(e: SyntheticEvent) {
        if( !(e.target instanceof HTMLSelectElement) ) return 
        if( ![...conduitTypes,  'initial'].includes(e.target.value) ) return
        setConduitType(e.target.value as ConduitTypes)
    }


    /***
     * @todo Add table 10 values for each type of wire
     * ugh....
     */
    function calcMinSizeConduit() : ConduitSize | null {

        if( ![...conduitTypes, 'initial'].includes(conduitType) ) return null

        const totalFill = conduitCrossSectionalArea[conduitType]
        // console.log(totalFill)

        let currentFill : number = 0

        wireSet.forEach( wire => {
            currentFill += Number(wire.amount) * 100
        })

        console.log(currentFill, totalFill)
        return null
    }

    const minSizeConduit = calcMinSizeConduit()


    return (
        <Main>
            <PageHeading>
                Conduit Fill Calculator
            </PageHeading>

            <FormGrid>
                <label className='col-span-2'>
                    Conduit Type
                    <Select onChange={handleConduitTypeChange}>
                        <option value='initial'>---</option>
                        { conduitTypes.map( conduitType => (
                            <option value={conduitType} key={conduitType}>{conduitType}</option>
                        ))}
                    </Select>
                </label>

                {
                    wireSet.map( (set, index) => (
                       <WireSet handleUpdateWireSet={handleUpdateWireSet} amount={set.amount} wireSize={set.wireSize} key={index} index={index} />
                    ) )
                }

                <SubmitButton handleClick={handleAddWireSet}>
                    <AddIcon />
                    Add Wire Set
                </SubmitButton>

                { minSizeConduit &&
                    <FormResults minSizeConduit={minSizeConduit} />
                }

            </FormGrid>

        </Main>
    )
}




function WireSet({amount, wireSize, handleUpdateWireSet, index}) {
    return (
        <>
            <Select onChange={ (e) => handleUpdateWireSet(index,e)} value={wireSize}>
                <option value="initial">---</option>
                { wireSizes.map( wireSize => (
                   <option value={wireSize} key={wireSize}>{wireSize}</option>
                ))}
            </Select>

            <Input 
                type="number" 
                value={amount} 
                onChange={(e) => handleUpdateWireSet(index,e)} 
                step={1}
            />
        </>
    )
}



function FormResults({minSizeConduit} : {minSizeConduit : ConduitSize}) {

    const [scope, animate] = useAnimate()

    useEffect( () => {
        animate('div', { y: [100, 0], opacity : [0, 100] })
    }, [minSizeConduit])

    return (
        <div className="col-span-2" ref={scope}>
            <div>
                {minSizeConduit}
            </div>
        </div>
    )
}