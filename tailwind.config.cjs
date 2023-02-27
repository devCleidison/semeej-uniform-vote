/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', "sans-serif"]
      },

      colors: {
        black: "#262626",
        gray: "#a3a3a3",
        white: "#fafafa",
        green: "#22c55e"
      }
    },
  },
  plugins: [],
}
