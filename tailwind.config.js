/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors  : {
        buttonBgColor: "#0067FF",
        yellowColor: "#FEB60D",
        purpleColor : "#9771FF"

      }
    },
  },
  plugins: [],
}

