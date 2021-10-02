module.exports = {
	purge: [
		"./src/components/CheckoutForm/Checkout/AddressForm.jsx",
		"./src/components/CheckoutForm/Checkout/Checkout.jsx",
		"./src/components/CheckoutForm/ConfirmationPage.jsx",
		"./src/components/CheckoutForm/Payment.jsx",
		"./src/components/footer/Footer.jsx",
		"./src/components/Home/Accordion.jsx",
		"./src/components/Home/AskedQuestion.jsx",
		"./src/components/Home/DropDown.jsx",
		"./src/components/Home/Home.jsx",
		"./src/components/Home/MailingForm.jsx",
		"./src/components/Navbar/Navbar.jsx",
		"./src/components/Products/ProductDetails.jsx",
		"./src/components/Products/ProductDisplay.jsx",
		"./src/components/Products/Products.jsx",
		"./src/components/Cart.jsx",
		"./src/App.js",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				orange: {
					DEFAULT: "#ff9800",
					50: "#fff3e0",
					100: "#ffe0b2",
					200: "#ffcc80",
					300: "#ffb74d",
					400: "#ffa726",
					500: "#ff9800",
					600: "#fb8c00",
					700: "#f57c00",
					800: "#ef6c00",
					900: "#e65100",
				},
			},

			transitionProperty: {
				height: "height",
			},
		},
	},

	variants: {
		height: ["responsive", "hover", "focus"],
		extend: {
			padding: ["hover"],
		},
	},
};
