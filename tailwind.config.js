/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'mint-blue': {
          DEFAULT: '#5bc0be',
          light: '#84dcc6', 
          dark: '#3b8b88', 
        }
      }
    },
  },
  plugins:[],
}