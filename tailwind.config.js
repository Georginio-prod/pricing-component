/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background : "#F7F7FE",
        linear: "#A2A7F0",
        linear1: "#696EDD",
        grisclair: "#6E728E",
        number: "#4A4D60",
        btn:"#6D72DE"
      }
    },
  },
  plugins: [],
}

