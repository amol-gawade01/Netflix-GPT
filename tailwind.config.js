/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey':'#141010',
      },
      height: {
        'screen-75': '75vh',
        'screen-50': '50vh',
      }
    },
  },
  plugins: [],
}

