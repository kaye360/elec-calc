import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<motion.header 
			className="flex items-center justify-between py-4 px-2 bg-slate-600 text-slate-50"
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
		>  
			<span>
				<Link to="/">
					ElecCalc
				</Link>
			</span>

			<button>
				Menu
			</button>
		</motion.header>
	)
}
