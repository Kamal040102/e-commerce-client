/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "90-per": "90%",
        "10-per": "10%",
        "100": "30rem",
        "98": "26rem"
      },
      width: {
        "90-per": "90%"
      }
    },
  },
  plugins: [require("daisyui")],
}

