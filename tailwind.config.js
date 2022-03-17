module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],

	theme: {
		extend: {
			colors: {
				orange: {
					DEFAULT: '#ff9800',
					50: '#fff3e0',
					100: '#ffe0b2',
					200: '#ffcc80',
					300: '#ffb74d',
					400: '#ffa726',
					500: '#ff9800',
					600: '#fb8c00',
					700: '#f57c00',
					800: '#ef6c00',
					900: '#e65100',
				},
			},

			transitionProperty: {
				width: 'width',
			},
		},
	},

	// variants: {
	// 	height: ['responsive', 'hover', 'focus'],
	// 	extend: {
	// 		padding: ['hover'],
	// 	},
	// },
};
