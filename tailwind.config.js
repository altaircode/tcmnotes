/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'dark': "#121519",
				'light': "white",
				'primary': "#37715d",
				'fs_dark': "#1E2125",
				'sd_dark': "#14151A",
				'fs_light': "#EDF1F5",
				'sd_light': "white",
				'color_dark': "white",
				'color_light': "black",
			}
		},
	},
	plugins: [],
}

