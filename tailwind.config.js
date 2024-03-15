/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['"Poppins"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

