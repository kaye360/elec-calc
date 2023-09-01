import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'



export default function SubCategoryButton({href, className, children, ...rest} : { href: string, className? : string, children : ReactNode}) {
    return (
        <Link to={href} className={` rounded-xl border-2 border-sky-200 dark:border-sky-900 hover:bg-sky-300 dark:hover:bg-sky-800 p-4 active:bg-sky-400 dark:active:bg-sky-300 ${className} `} {...rest}>
            {children}
        </Link>
    )
}
