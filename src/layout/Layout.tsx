import React from 'react'
import Header from './Header'
import BreadCrumbs from './BreadCrumbs'


export default function Layout({children}: {children: React.ReactNode}) {
	return (

        <div className="max-w-lg min-h-screen mx-auto px-2 mb-4 font-app">

            <Header />

            <BreadCrumbs />

            {children}

        </div>
	)
}

