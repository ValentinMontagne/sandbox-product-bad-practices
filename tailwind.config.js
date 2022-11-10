/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'dancing-script': ['Dancing Script', 'sans-serif']
      },
      container: {
        center: true,
        screens: {
          xl: '1440px'
        }
      },
      colors: {
        'k-background': '#F6F6F6',
        'k-background-400': '#FFFFFF',
        'k-surface': '#000000',
        'k-surface-light': '#FFFFFF',
        'k-primary': '#00838A',
        'k-primary-400': '#009BA4',
        'k-secondary': '#00825B',
        'k-accent': '#2FE361',
        'k-success': '#22EB5A',
        'k-error': '#DC1010'
      }
    },
  },
  plugins: [],
};
