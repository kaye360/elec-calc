import React from 'react'
import Header from './Header'
import BreadCrumbs from './BreadCrumbs'
import { Outlet } from 'react-router-dom'


export default function Layout() {
	return (

        <div className="max-w-lg min-h-screen mx-auto px-2 mb-4 font-app">

            <Header />

            <BreadCrumbs />

            <Outlet />

        </div>
	)
}

