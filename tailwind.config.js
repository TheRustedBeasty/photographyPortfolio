/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      'background': '#F6F2EE',
      'black': '#000000',
      'white': '#FFFFFF'
    },
    fontFamily: {
      'sans': ['sans-serif'],
  },
  plugins: [],
}
}