
import React, { MouseEventHandler, ReactNode } from 'react'


export const formElementClassName = "mb-4 px-2 py-4 text-xl rounded-xl w-full border border-slate-400"



export function FormGrid({children} : {children : ReactNode}) {
    return (
        <div className="grid grid-cols-2 gap-2 relative"> 
            {children}
        </div>
    )
}


export function FormResults({children} : {children : ReactNode}) {
    return (
        <div className="sticky bottom-0 col-span-2 bg-slate-800 text-slate-100 rounded p-4 text-lg">
            <span className="block font-bold">Results</span>
            {children}
        </div>
    )
}


export function Input({...rest}) {
    return <input step={1} className={formElementClassName} {...rest} />
}


// @ts-ignore
export function Select({children, ...rest}) {
    return (
        <select className={formElementClassName} {...rest}>
            {children}
        </select>
    )
}


export function ResetButton({handleReset} : {handleReset : MouseEventHandler<HTMLButtonElement>}) {
    return (
        <button onClick={handleReset} className="border border-slate-400 hover:border-slate-600 py-2 rounded-lg col-span-2">
            Reset
        </button>
    )
}