module.exports = {
	purge: ['./pages/**/*.tsx', './components/**/*.tsx', './styles/**/*.css'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			ringWidth: ['hover'],
		},
	},
	plugins: [],
}
