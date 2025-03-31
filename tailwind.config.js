/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // ItemCard.tsx がここにある
	],
	theme: {
		extend: {
			colors: {
				"primary-orange": "#FF5E2A",
			},
		},
	},
	plugins: [],
};
