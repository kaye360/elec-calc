
import { motion } from 'framer-motion'
import React, { MouseEventHandler, ReactNode } from 'react'


export const formElementClassName = "mb-4 px-2 py-4 text-xl rounded-xl w-full border border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950 text-sky-950 dark:text-sky-100"



export function FormGrid({children} : {children : ReactNode}) {
    return (
        <div className="grid grid-cols-2 gap-2 relative"> 
            {children}
        </div>
    )
}


export function FormResults({children} : {children : ReactNode}) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky bottom-0 col-span-2 bg-sky-200 dark:bg-slate-950 dark:bg-opacity980 text-sky-950 dark:text-sky-100 rounded p-4 text-lg"
        >
            <span className="block mb-2 font-bold border-b border-sky-900">Results:</span>
            {children}
        </motion.div>
    )
}


export function Input({...rest}) {
    return <input className={formElementClassName} {...rest} />
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
        <button onClick={handleReset} className={`${formElementClassName} bg-transparent text-sky-900 dark:text-sky-200 dark:hover:border-sky-600 col-span-2`} >
            Reset
        </button>
    )
}



export function SubmitButton({handleClick, children} : {handleClick : MouseEventHandler<HTMLButtonElement>, children : any}) {
    return (
        <button onClick={handleClick} className={`${formElementClassName} flex items-center justify-center gap-2 col-span-2 hover:bg-sky-200 dark:hover:bg-sky-900`}>
            {children}
        </button>
    )
}