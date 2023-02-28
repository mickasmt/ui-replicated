/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'robert': 'Roobert PRO',
      },
      colors: {
        'nuxt-black': 'rgb(var(--nuxt-color-black) / <alpha-value>)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
