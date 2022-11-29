/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "about": "50vh"
      },
      width: {
        "about": "45vw"
      },
      height: {
        "cloud": "70vh"
      },
      colors: {
        "sideBg": "#383838",
      },
    },
  },

  plugins: [],
}
