import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
	return (
		<motion.header 
			className="flex items-center justify-between pt-8 pb-4 px-2 text-slate-50 rounded-b-xl"
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
		>  
			<Link to="/" className="flex items-center gap-1 text-sky-100 text-xl font-semibold font-theme tracking-wider hover:underline">
				<Logo />
				SparkPal
			</Link>

			<ThemeToggle />
		</motion.header>
	)
}