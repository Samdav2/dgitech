/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'tp-bg': '#0A0A0F',
        'tp-navy': '#0A1628',
        'tp-green': '#00E64D',
        'tp-blue': '#0066FF',
        'tp-gold': '#D4A017',
        'tp-card': 'rgba(10,22,40,0.6)'
      },
      boxShadow: {
        'green-glow': '0 8px 24px rgba(0,230,77,0.12)'
      },
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui'],
        inter: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      }
    }
  },
  plugins: []
};
