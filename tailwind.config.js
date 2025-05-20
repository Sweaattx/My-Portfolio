/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#000000',
        'dark-accent': '#111111',
        primary: '#FFFFFF',
        secondary: '#CCCCCC',
        light: '#FFFFFF',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-delayed': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) 2s infinite',
        'rotate-shine': 'rotate-shine 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(1.05)' },
        },
        'rotate-shine': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        // Fuente principal para títulos
        display: ['var(--font-playfair)', 'serif'],
        // Fuente para subtítulos y elementos destacados
        heading: ['var(--font-montserrat)', 'sans-serif'],
        // Fuente para contenido general
        body: ['var(--font-inter)', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#FFFFFF',
            a: {
              color: '#FFFFFF',
              '&:hover': {
                color: '#CCCCCC',
              },
            },
            strong: {
              color: '#FFFFFF',
            },
            h1: {
              color: '#FFFFFF',
              fontFamily: 'var(--font-playfair)',
              fontWeight: '700',
            },
            h2: {
              color: '#FFFFFF',
              fontFamily: 'var(--font-playfair)',
              fontWeight: '600',
            },
            h3: {
              color: '#FFFFFF',
              fontFamily: 'var(--font-montserrat)',
              fontWeight: '600',
            },
            h4: {
              color: '#FFFFFF',
            },
            code: {
              color: '#FFFFFF',
            },
            pre: {
              backgroundColor: '#111111',
              color: '#FFFFFF',
            },
            blockquote: {
              color: '#FFFFFF',
              borderLeftColor: '#FFFFFF',
            },
            p: {
              fontFamily: 'var(--font-inter)',
              fontWeight: '400',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
