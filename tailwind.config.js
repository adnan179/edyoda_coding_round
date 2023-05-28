/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      const extendLineThrough = {
          '.line-through': {
              'textDecoration': 'line-through',
              'text-decoration-color': 'red',
          },
      }
      addUtilities(extendLineThrough)
  }
  ],
}