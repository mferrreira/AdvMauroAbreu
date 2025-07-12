/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'body': ['Source Serif Pro', 'serif'],
        'heading': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} 