/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'primary': '#E2E8CE',
      'secondary': '#262626',
      'highlight': '#ACBFA4',
      'accentPrimary': '#DA7635',
      'accentSecondary': '#E24E1B'
    },
    fontFamily: {
      'robotoCondensed': ['Roboto Condensed', 'sans-serif'],
      'bebasNeue': ['Bebas Neue', 'sans-serif'],
    },
  },
  plugins: [],
}

