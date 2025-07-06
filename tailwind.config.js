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
        // Elegant color palette
        elegant: {
          white: '#ffffff',
          light: '#fafafa',
          dark: '#1a1a1a',
          accent: '#8b7355',
          gray: '#666666',
        },
        // Legacy colors for compatibility
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
        'elegant': ['Georgia', 'Times New Roman', 'serif'],
        'display': ['Georgia', 'Times New Roman', 'serif'],
        'body': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 9rem)', {
          lineHeight: '1.1',
          letterSpacing: '0.05em',
          fontWeight: '300',
        }],
        'heading': ['clamp(1.5rem, 4vw, 3rem)', {
          lineHeight: '1.2',
          letterSpacing: '0.02em',
          fontWeight: '300',
        }],
        'body': ['clamp(1rem, 2vw, 1.125rem)', {
          lineHeight: '1.7',
          letterSpacing: '0.01em',
          fontWeight: '300',
        }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em',
      },
    },
  },
  plugins: [],
}; 
