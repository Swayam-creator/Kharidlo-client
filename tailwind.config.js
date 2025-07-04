/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       headline: ['headline', 'sans-serif'],
        regular: ['regularfont', 'sans-serif'],
    },
  },
  plugins: [],
}
