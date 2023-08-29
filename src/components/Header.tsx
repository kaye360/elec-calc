import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<motion.header 
			className="flex items-center justify-between py-4 px-2 bg-sky-900 text-slate-50"
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
		>  
			<span>
				<Link to="/" className="flex items-center gap-1 text-sky-100 text-lg font-semibold tracking-wider hover:underline">
					<Logo />
					ElecCalc
				</Link>
			</span>

			<button>
				Menu
			</button>
		</motion.header>
	)
}




function Logo() {
	return (
		<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M6.79331 12.5L0.868311 11.75C0.451645 11.7 0.180645 11.475 0.0553114 11.075C-0.0700219 10.675 0.0176448 10.3333 0.318311 10.05L10.5433 0.250016C10.6266 0.166682 10.7266 0.104016 10.8433 0.0620157C10.96 0.0200157 11.1183 -0.000651042 11.3183 1.5625e-05C11.6516 1.5625e-05 11.906 0.141682 12.0813 0.425016C12.2566 0.708349 12.2606 1.00002 12.0933 1.30002L8.79331 7.50002L14.7183 8.25002C15.135 8.30002 15.406 8.52502 15.5313 8.92502C15.6566 9.32502 15.569 9.66668 15.2683 9.95002L5.04331 19.75C4.95998 19.8333 4.85998 19.896 4.74331 19.938C4.62664 19.98 4.46831 20.0007 4.26831 20C3.93498 20 3.68064 19.8583 3.50531 19.575C3.32998 19.2917 3.32598 19 3.49331 18.7L6.79331 12.5Z" fill="currentColor"/>
		</svg>
	)
}