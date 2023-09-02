import React, { SyntheticEvent, useState } from 'react'
import Main from '../../../layout/Main'
import PageHeading from '../../../components/PageHeading'
import { FormGrid, FormResults, Input, ResetButton, Select } from '../../../components/FormElements'

export default function WirePricing() {

    const { unit, price, length, result, meters, handleLengthChange, handlePriceChange, handleUnitChange, handleReset } = useWirePricing()

    return (
        <Main>

            <PageHeading>Wire Pricing Calculator</PageHeading>
            
            <FormGrid>

                <ResetButton handleReset={handleReset} />

                <label>
                    Length
                    <Input type="number" onChange={handleLengthChange} value={length} />
                </label>

                <label>
                    Feet or Meters?
                    <Select onChange={handleUnitChange} value={unit}>
                        <option value="initial">---</option>
                        <option value="feet">Feet</option>
                        <option value="meters">Meters</option>
                    </Select>
                </label>

                <label>
                    Price per meter
                    <Input type="number" step={0.01} onChange={handlePriceChange} value={price} />
                </label>

                { length > 0 && unit !== 'initial' && price > 0 &&
                    <FormResults>
                        <p className='font-bold'>
                            <span className='text-2xl'>
                                Total: ${result.toFixed(2)} <br />
                            </span>
                            <span className='text-sky-400 text-sm'>
                            {meters} meters at ${price.toFixed(2)} per meter<br />
                            </span>
                        </p>
                    </FormResults>
                }
            </FormGrid>
        </Main>
  )
}



function useWirePricing() {
    const [length, setLength] = useState<number>(0)
    const [unit, setsetUnit]  = useState<'feet' | 'meters' | 'initial'>('initial')
    const [price, setPrice]   = useState<number>(0)

    let result: number = 0

    if( unit === 'feet' ) {
        result = Number ( (length / 3.281 * price).toFixed(2) )
    }

    if( unit === 'meters') {
        result = Number( (length * price).toFixed(2) )
    }

    const meters = Number( (unit === 'meters' ? length : length / 3.281).toFixed(2) )

    function handleLengthChange(e: SyntheticEvent) {
        if( !(e.target instanceof HTMLInputElement) ) return
        console.log('hi')
        setLength( Number(e.target.value) )
    }

    function handleUnitChange(e: SyntheticEvent) {
        if( !(e.target instanceof HTMLSelectElement) ) return
        if( e.target.value !== 'initial' && e.target.value !== 'feet' && e.target.value !== 'meters' ) return
        setsetUnit(e.target.value)
    }

    function handlePriceChange(e: SyntheticEvent) {
        if( !(e.target instanceof HTMLInputElement) ) return
        setPrice( Number(e.target.value) )
    }

    function handleReset() {
        setLength(0)
        setsetUnit('initial')
        setPrice(0)
    }

    return {
        unit, price, length, result, meters, handleLengthChange, handlePriceChange, handleUnitChange, handleReset
    }
}