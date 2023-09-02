/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#fcfcfc',
				'primary-dark': 'rgb(20,20,22)',
				'primary-text-color': 'rgb(35,38,47)',
				'primary-text-color-dark': 'rgb(252,252,253)',
			},
			fontFamily: {
				custom: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
