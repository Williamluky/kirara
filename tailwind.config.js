/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          light: '#ffe4ec', // very light pink
          DEFAULT: '#fbb1c8', // sakura pink
          dark: '#e17b98', // deeper pink
        },
        skin: {
          light: '#f8f5f2', // creamy off-white
          warm: '#f5e6d3', // warm tan
        },
        brand: {
          background: '#f8f5f2', // creamy off-white
        },
        brown: {
          dark: '#000000', // black for text
        },
      },
      fontFamily: {
        'display': ['var(--font-playfair)', 'serif'], // Vogue-style headings
        'body': ['var(--font-cormorant)', 'serif'], // Elegant body text
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 
