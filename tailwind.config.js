/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'theme' : 'kanit, helvetica, arial, system-ui, sans-serif',
				'app' : '\'work sans\', helvetica, arial, system-ui, sans-serif',
				'copy' : 'poppins, helvetica, arial, system-ui, sans-serif',
			}
		},
	},
	plugins: [],
	darkMode : 'class'
}