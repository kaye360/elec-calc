'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'


interface Crumb {
    title : string,
    href : string,
    isLast : boolean
}

export default function BreadCrumbs() {

    let { pathname } = useLocation()
    const crumbs: Crumb[] = generateCrumbs(pathname)

    if( pathname === '' ) return <></>
    
    return (
        <motion.div 
            className="flex items-center gap-2 my-2"
            initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
        >

            <Link to="/">Home</Link>
            
            { pathname !== '/' && '/' }

            { crumbs.map( (crumb, index) => (
                
                <React.Fragment key={index}>
                    <Link to={crumb.href} state={{backlink : true}}>
                        {crumb.title}
                    </Link>

                    { !crumb.isLast && <span>/</span> }
                </React.Fragment>
            ))}

        </motion.div>
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

