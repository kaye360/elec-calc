import React, { SyntheticEvent, useState } from 'react'
import Main from '../../../layout/Main'
import PageHeading from '../../../components/PageHeading'
import { FormGrid, FormResults, Input, ResetButton, Select } from '../../../components/FormElements'
import { isHTMLInputElement, isHTMLSelectElement } from '../../../utils/form'

export default function WirePricing() {

    const { unit, price, length, result, meters, handleLengthChange, handlePriceChange, handleUnitChange, handleReset } = useWirePricing()

    const resultsAreReady = Number(length) > 0 && unit !== 'initial' && Number(price) > 0

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

                { resultsAreReady &&
                    <FormResults>
                        <p className='font-bold'>
                            <span className='text-2xl'>
                                Total: ${result.toFixed(2)} <br />
                            </span>
                            <span className='text-sky-400 text-sm'>
                                {meters.toFixed(2)} meters at ${price} per meter<br />
                            </span>
                        </p>
                    </FormResults>
                }
            </FormGrid>
        </Main>
  )
}



function useWirePricing() {

    type Unit = 'feet' | 'meters' | 'initial'

    const [length, setLength] = useState<number | ''>(0)
    const [unit, setsetUnit]  = useState<Unit>('initial')
    const [price, setPrice]   = useState<number | ''>(0)

    const isValidUnit = (value : any) : value is Unit => ['initial', 'feet', 'meters'].includes(value)

    let result: number = 0

    if( unit === 'feet' ) {
        result = Number ( (Number(length) / 3.281 * Number(price)).toFixed(2) )
    }

    if( unit === 'meters') {
        result = Number( (Number(length) * Number(price)).toFixed(2) )
    }

    const meters = Number(unit === 'meters' ? length : Number(length) / 3.281)

    function handleLengthChange(e: SyntheticEvent) {
        if( !isHTMLInputElement(e.target) ) return
        setLength( e.target.value === '' ? e.target.value : Number(e.target.value) )
    }

    function handleUnitChange(e: SyntheticEvent) {
        if( !isHTMLSelectElement(e.target) ) return
        if( !isValidUnit(e.target.value) ) return
        setsetUnit(e.target.value)
    }

    function handlePriceChange(e: SyntheticEvent) {
        if( !isHTMLInputElement(e.target) ) return
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