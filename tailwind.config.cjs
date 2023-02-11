/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#085eb1",
        activeColor: "#ea5e00"
      }
    },
    fontFamily: {
      "sf-pro": ["SF Pro Display", "sans-serif"],
    },
  },
  plugins: [],
}
