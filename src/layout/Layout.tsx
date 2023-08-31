import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import Header from '../components/Header'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from '../routes/ErrorPage'


export default function Layout({children}: {children: React.ReactNode}) {
	return (

        <div className="max-w-lg min-h-screen mx-auto px-2 mb-4">

            <Header />

            <BreadCrumbs />

            {children}

        </div>
	)
}

