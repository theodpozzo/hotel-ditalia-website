/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          accent: 'var(--color-accent)',
          primary: 'var(--color-primary)',
          white: 'var(--color-white)',
        }
      },
    },
    fontFamily: {
      'josefin-sans': ['var(--font-josefin-sans)'],
      'josefin-slab': ['var(--font-josefin-slab)'],
    },
  },
  plugins: [],
} 