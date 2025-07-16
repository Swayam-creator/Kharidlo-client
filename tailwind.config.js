/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        headline: ['headline', 'sans-serif'],
        regularfont: ['regularfont', 'sans-serif'],
        NB: ['NB', 'sans-serif'],
        Ut: ['Ut', 'sans-serif'],
       },
       fontWeight:{
        extra:'1000'
       }
    },
  },
  plugins: [],
}
