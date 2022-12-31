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

			backgroundImage: {
				image1: "url('../public/images/mnz-ToLMORRb97Q-unsplash.jpg')",
				image2:
					"url('../public/images/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg')",
			},

			transitionProperty: {
				width: 'width',
			},

			fontFamily: {
				merriweather: ['Merriweather', 'serif'],
				italiano: ['Italiano', 'cursive'],
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
