/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "roboto": ["Roboto", "sans-serif"],
        "raleway" : [ "Raleway", "sans-serif"],
        "cursive": ["Great Vibes", "cursive"],
        "title": [ "Saira", "sans-serif"]
      }
    },
  },
  plugins: [],
}