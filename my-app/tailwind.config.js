/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          1: '#ecf0f1',
          2: '#bdc3c7',
        },
        dark: {
          1: '#34495e',
          2: '#2c3e50',
        },
      },
    },
    
      // ...

  },
  darkMode: 'class',
  plugins: [],
}
