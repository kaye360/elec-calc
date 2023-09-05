import React, { ReactNode } from "react";



export function List({children} : {children? : ReactNode}) {

    return (
        <ul className="list-disc pl-6 py-2 flex flex-col items-start gap-2">
            {children}
        </ul>
    )
}


export function ListItem({children} : {children? : ReactNode}) {

    return (
        <li>
            {children}
        </li>
    )
}


export function DropDownList({children} : {children? : ReactNode}) {

    return (
        <ul className="list-disc pl-6 py-2 flex flex-col items-start gap-2">
            {children}
        </ul>
    )
}


export function DropDownListItem({children} : {children? : ReactNode}) {

    return (
        <li>
            {children}
        </li>
    )
}
