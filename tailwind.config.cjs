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
        "about": "45vw",
        "dotsBox": "30px",
        "dots": "8%"
      },
      height: {
        "cloud": "70vh",
        "title": "40vh",
        "dotsBox": "30px",
        "dots": "8%"
      },
      colors: {
        "sideBg": "#383838",
      },
      keyframes: {
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "loopScale": {
          "0%, 25%": { transform: "scale(1.3, 0.7)" },
          "25%, 50%": { transform: "scale(0.7, 1.3)" },
          "50%, 75%": { transform: "scale(1.3, 0.7)" },
          "75%, 100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "wiggle": "wiggle 1s ease-in-out infinite",
        "loopScale": "loopScale 1s ",
      },

    },
  },
  plugins: [],
}
