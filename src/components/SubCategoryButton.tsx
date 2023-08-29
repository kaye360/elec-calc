import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'



export default function SubCategoryButton({href, className, children, ...rest} : { href: string, className? : string, children : ReactNode}) {
    return (
        <Link to={href} className={` rounded-xl border border-slate-300 p-4 hover:border-slate-600 active:bg-slate-300 ${className} `} {...rest}>
            {children}
        </Link>
    )
}
