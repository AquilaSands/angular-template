module.exports = {
	prefix: '',
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		mode: 'all',
		content: ['./src/**/*.{html,ts}'],
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
