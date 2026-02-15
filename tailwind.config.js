/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'inmotion-blue': '#0077b6', 
        'inmotion-green': '#90be6d', 
      }
    },
  },
  plugins: [],
}