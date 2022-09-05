/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				mainColor: "#274C00",
				midColor: "#4D8300",
				sectionColor: "#3B6900",
			},
			fontFamily: {
				pyidaungsu: ["Pyidaungsu", "sans-serif"],
			},
		},
	},
	plugins: [],
};
