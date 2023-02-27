/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // 'nuxt-black': 'rgb(var(--nuxt-color-black) / <alpha-value>)',
    },
  },
  plugins: [],
}
