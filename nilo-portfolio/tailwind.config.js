/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f6f8',
          100: '#e9ebef',
          200: '#cdd2db',
          300: '#a7afbf',
          400: '#7a8499',
          500: '#5b6678',
          600: '#46505f',
          700: '#363e4b',
          800: '#1f2530',
          900: '#141821',
          950: '#0b0e15',
        },
        gold: {
          50: '#fbf7ee',
          100: '#f5ecd2',
          200: '#ead7a3',
          300: '#ddbd6c',
          400: '#d4a847',
          500: '#c6922f',
          600: '#a97324',
          700: '#87571f',
          800: '#71461f',
          900: '#603b1e',
        },
        emerald2: {
          400: '#3fb98a',
          500: '#1f9d6b',
          600: '#157f56',
          700: '#116445',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'line-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.8s ease forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'line-grow': 'line-grow 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};
