import React, { ReactNode, SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'



interface SubCategoryButton {
    href: string, 
    className? : string, 
    comingSoon? : boolean,
    children : ReactNode
}

export default function SubCategoryButton({href, className, children, comingSoon = false, ...rest} : SubCategoryButton) {
    return (
        <Link 
            to={href} 
            className={` 
                relative rounded-xl 
                border-2 border-sky-200 dark:border-sky-950 
                hover:bg-sky-300 dark:hover:bg-sky-950 p-4 active:bg-sky-400 dark:active:bg-sky-300 
                ${comingSoon ? 'cursor-not-allowed' : ''}
                ${className} 
            `} 
            onClick={ (e: SyntheticEvent) => comingSoon && e.preventDefault() }
            {...rest}
        >
            {children}
            { comingSoon && (
                <span className='absolute right-2 top-1/2 -translate-y-1/2 text-md text-sky-900 text-opacity-50 dark:text-sky-100 dark:text-opacity-50'>
                    Coming Soon!
                </span>
            )}
        </Link>
    )
}
