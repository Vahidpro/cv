/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				vazir: ['Vazirmatn', 'sans-serif'],
			},
			colors: {
				primary: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
					950: '#082f49',
				},
				success: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#4ade80',
					500: '#22c55e',
					600: '#16a34a',
					700: '#15803d',
					800: '#166534',
					900: '#14532d',
					950: '#052e16',
				},
			},
			backgroundImage: {
				'gradient-custom':
					'linear-gradient(92.88deg, #455eb5 9.16%, #5643cc 43.89%, #673fd7 64.72%)',
			},
			boxShadow: {
				custom: 'rgba(80, 63, 205, 0.5) 0 0.125rem 1.875rem',
			},
		},
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		require('tailwindcss-rtl'),
	],
};
