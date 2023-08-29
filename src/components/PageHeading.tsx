import React from "react";
import { ReactNode } from "react";


export default function PageHeading({children} : {children : ReactNode}) {
    return (
        <h1 className="text-xl font-medium my-4 border-b border-slate-400">
            {children}
        </h1>
    )
}