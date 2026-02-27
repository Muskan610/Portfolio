/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5F5',
          100: '#FFE5E5',
          200: '#FFC5C5',
          300: '#FFB6B6',
          400: '#FFAA9D',
          500: '#FF9D8F',
        },
        sage: {
          100: '#E8EBE6',
          200: '#C8CFC5',
          300: '#A8B5A1',
          400: '#9FA699',
          500: '#8A9584',
          600: '#829672',
          700: '#6B7A65',
          800: '#4D5A48',
        },
        cream: '#FAF5F0',
        ivory: '#FFF5EE',
        accent: '#FFB6B6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'marquee': 'marquee 40s linear infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'pulse-shadow': 'pulseShadow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseShadow: {
          '0%, 100%': {
            textShadow: '0 0 20px rgba(255, 182, 182, 0.4)',
          },
          '50%': {
            textShadow: '0 0 40px rgba(255, 182, 182, 0.8), 0 0 60px rgba(255, 182, 182, 0.4)',
          },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundSize: {
        '200%': '200% 200%',
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
}
