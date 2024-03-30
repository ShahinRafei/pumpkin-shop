/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      gridTemplateColumns: {
        "table" : "repeat(auto-fill, minmax(13rem, 1fr))",
        "table-sm" : "repeat(auto-fill, minmax(7rem, 1fr))"
      },
    }
  },
  plugins: []
}
