/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss"
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        img: "url('/background.webp')"
      },
      colors: {
        primary: "rgba(255, 255, 255, 0.9)",
        "primary-darker": "rgba(255,255,255,0.4)",
        secondary: "rgba(7, 7, 10, 0.4)",
        cta: "rgba(44, 200, 207, 1)",
        "cta-danger": "rgba(197, 52, 52, 1)",
        "cta-success": "rgba(58, 184, 63, 1)"
      }
    }
  },
  plugins: [],
}
