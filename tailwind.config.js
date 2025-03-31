/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  
	theme: {
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				"primary-orange": "#FF5E2A",
			},
		},
	},
	plugins: [],
};
