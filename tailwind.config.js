// const image = require('./src/assets/Images/Phones/')
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				Rampart: ["Roboto", "sans-serif"],
				Voltaire: ['Voltaire', 'sans-serif'],
			   },
			backgroundImage: {
				Iphone11Green: "url('/src/assets/Images/Phones/Iphone11.jpg')",
				Xiaomi10S: "url('/src/assets/Images/Phones/Xiaomi10.webp')",
				Iphone8: "url('/src/assets/Images/Phones/Iphone 8.png')",
				Iphone5s: "url('/src/assets/Images/Phones/Iphone5s.jpg')",
				IphoneX: "url('/src/assets/Images/Phones/IphoneX.png')",
				OnePlus5t: "url('/src/assets/Images/Phones/onePlusP.png')",
				Redmi9: "url('/src/assets/Images/Phones/redmi9.png')",
				SamsungS21Ultra: "url('/src/assets/Images/Phones/samsungPhone.png')",
				SamsungS8: "url('/src/assets/Images/Phones/samsungs8.png')",
				SamsungS10: "url('/src/assets/Images/Phones/samsungS10.jpg')",
				XiaomiP10: "url('/src/assets/Images/Phones/XiaomiP.jpg')",
			},
		},
	},
	plugins: [],
};
