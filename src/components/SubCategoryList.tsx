import React, { ReactNode } from 'react'

export default function SubCategoryList({children} : {children : ReactNode}) {
    return (
        <div className='grid gap-4'>
            {children}
        </div>  
    )
}
