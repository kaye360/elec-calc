'use client'

import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'


interface Crumb {
    title : string,
    href : string,
    isLast : boolean
}

export default function BreadCrumbs() {

    let { pathname }      = useLocation()
    const crumbs: Crumb[] = generateCrumbs(pathname)

    if( pathname === '/' ) return <></>
    
    return (
        <motion.div 
            className="flex items-center gap-2 my-2 text-lg"
            initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
        >

            <BreadCrumbLink to="/">Home</BreadCrumbLink>
            <BreadCrumbArrow />

            { crumbs.map( (crumb, index) => (
                
                <React.Fragment key={index}>
                    <BreadCrumbLink to={crumb.href}>{crumb.title}</BreadCrumbLink>
                    { !crumb.isLast && <BreadCrumbArrow /> }
                </React.Fragment>
            ))}

        </motion.div>
    )
}



function BreadCrumbLink({to, children} : {to: string, children: ReactNode}) {
    return (
        <Link to={to} state={{backlink : true}} className='px-3 py-1 border border-slate-300 hover:bg-slate-100 rounded-lg'>
            {children}
        </Link>
    )
}




function BreadCrumbArrow() {
    return (
        <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.24186 1.18038C0.164602 1.11359 0.104204 1.03502 0.0641135 0.949163C0.0240233 0.863304 0.00502568 0.771834 0.00820644 0.679976C0.0113872 0.588119 0.0366837 0.497673 0.0826512 0.413802C0.128619 0.329931 0.194357 0.254278 0.276113 0.191162C0.357869 0.128047 0.454043 0.0787043 0.559141 0.0459527C0.664239 0.013201 0.776204 -0.00231868 0.888644 0.000279837C1.00108 0.00287835 1.1118 0.0235441 1.21446 0.0610972C1.31712 0.0986502 1.40973 0.152355 1.48699 0.219146L8.76592 6.51545C8.91624 6.64534 9 6.81732 9 6.99607C9 7.17482 8.91624 7.34679 8.76592 7.47669L1.48699 13.7737C1.41024 13.8419 1.31765 13.8971 1.21461 13.9358C1.11157 13.9746 1.00013 13.9963 0.886752 13.9996C0.773376 14.0029 0.66033 13.9877 0.55418 13.955C0.448031 13.9223 0.350893 13.8727 0.268409 13.8091C0.185925 13.7454 0.11974 13.669 0.0736972 13.5843C0.0276548 13.4996 0.00267313 13.4083 0.000203026 13.3156C-0.00226708 13.223 0.0178234 13.1308 0.0593082 13.0446C0.100793 12.9583 0.162845 12.8797 0.24186 12.8132L6.96589 6.99607L0.24186 1.18038Z" fill="#BECBDA"/>
        </svg>
    )
}




/**
 * 
 * @param pathname 
 * @returns Crumb[]
 * 
 * Generates Array of Crumb crumbs
 */
function generateCrumbs(pathname : string) : Crumb[] {

    const pathnameArray = pathname.split('/').slice(1)
    const crumbLinks    = generateCrumbLinks(pathnameArray)

    return pathnameArray.map( (crumb: string, index) => ({
        title : formatBreadCrumb(crumb),
        href : crumbLinks[index],
        isLast : isLastCrumb(index, pathnameArray)
    }))
}



/**
 * 
 * @param crumb 
 * @returns string
 * 
 * Removes hyphens and captalizes each word
 */
function formatBreadCrumb(crumb : string) : string {
    if(crumb.length === 0) return ''
    return crumb.split('-')
                .map( word => ( word[0].toUpperCase() + word.substring(1) ))
                .join(' ')
}



/**
 * 
 * @param crumbArray 
 * @returns string[]
 * 
 * Returns an array of link href strings that map to pathnameArray indexes
 */
function generateCrumbLinks(crumbArray : string[]) {

    let crumbLinkContainer: string = ''

    return crumbArray.map( (crumb : string ) => {
        crumbLinkContainer += '/' + crumb
        return crumbLinkContainer
    })
}



/**
 * 
 * @param currentCrumbIndex 
 * @param totalCrumbs 
 * @returns boolean
 * 
 * Check if we are on the final crumb. Used to remove final / character
 */
function isLastCrumb(currentCrumbIndex : number, array : string[] ) : boolean {
    return currentCrumbIndex + 1 === array.length
}

