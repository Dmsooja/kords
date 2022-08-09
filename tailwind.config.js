/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primarygreen': '#CED5CF',
        'primaryorange': '#FBA366',
        'darkgreen': '#6E7E5F',
        'black': '#000000',
      },
    },
  },
  plugins: [],
}