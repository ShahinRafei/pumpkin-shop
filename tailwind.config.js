/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateColumns: {
        "table" : "repeat(auto-fill, minmax(14rem, 1fr))",
        "table-sm" : "repeat(auto-fill, minmax(10rem, 1fr))"
      },
    }
  },
  plugins: []
}
