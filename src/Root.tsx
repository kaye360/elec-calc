import React, { ReactNode } from "react"
import { Link, Outlet } from "react-router-dom"
import Layout from './layout/Layout'

export default function Root() {

	return (
		<Layout>
				Hi
				<Outlet />
		</Layout>
	)
}



interface Feature {
	href : string,
	className? : string,
	children : ReactNode
}

function Feature({href, className='', children, ...rest} : Feature) {
	return(
		<Link to={href} className={`aspect-square hover:bg-slate-200 grid place-items-center text-center rounded-xl ${className}`} {...rest}>
				{children}
		</Link>
	)
}

