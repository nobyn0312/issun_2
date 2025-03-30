/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}", // 使用するファイルのパスを指定
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
