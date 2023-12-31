import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

export default function Main({children} : { children : ReactNode}) {

    const location   = useLocation()
    const isBackLink =  location.pathname === '/' || location.state?.backlink === true

    return (
		<motion.div
			initial={{ opacity: 0, x: isBackLink ? -100 : 100 }}
			animate={{ opacity: 1, x: 0 }}
            className='pt-2'
		>
            {children}
        </motion.div>
    )
}
