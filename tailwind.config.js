/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8C2C2C',
        secondary: '#D4AF37',
        cream: '#FFF1E6',
        navy: '#2C4147'
      },
      fontFamily: {
        rozha: ['Rozha One', 'serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};