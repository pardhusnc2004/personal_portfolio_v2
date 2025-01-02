import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '860': '860px', // Custom breakpoint for 860px
      },
    },
  },
  plugins: [daisyui],
}