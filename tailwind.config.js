/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#f3f4f6",
        secondary:"#FDFDFD",
        primaryDark:"#18181B",
        secondaryDark:"#27272a",
        textPrimary:"#1f2937",
        textMuted:"#4b5563",
        textDark:"white",
        textMutedDark:"#d1d5db"

      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [  require('tailwind-scrollbar'),
    
  ],
}
