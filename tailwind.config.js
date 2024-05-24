/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      "5xl" : { max: "1920px" },
      "4xl" : { max: "1870px" },
      "3xl" : { max: "1680px" },
      "2xl" : { max: "1400px" },
      "xl" : { max: "1200px" },
      "lg" : { max: "992px" },
      "md" : { max: "768px" },
      "sm" : { max: "576px" },
      "xs" : { max: "450px" },
      "xxs" : { max: "375px" },
    },
    extend: {
      colors: {
        'darkCyan': '#5ba4a4',
        'grayishCyan': '#effafa',
        'lightCyan': '#eef6f6',
        'darkGrayishCyan': '#7b8e8e',
        'veryDarkCyan': '#2c3a3a'
      },
      backgroundImage: {
        'hero-desktop': "url('/src/assets/bg-header-desktop.svg')",
        'hero-mobile': "url('/src/assets/bg-header-mobile.svg')",
      },
      fontFamily: {
        'league': ['League Spartan', 'sans-serif'],
      },
      animation: {
        'fade': 'fade .3s linear',
        'fade-in': 'fade-in .6s ease-in',
      },
      keyframes: {
        'fade': {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      }
    },
  },
  plugins: [
		require("tailwindcss-animate"),
	],
}

