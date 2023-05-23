module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      colors:{
        'main-blue': '#1E3440',
      },
      boxShadow:{
        '3xl':'10px 10px 75px 0px rgba(0, 0, 0, 0.5)'
      },
      backgroundColor: {
        'main-bg': '#DAC28E',
        'main-dark-bg': '#705F48',        
        'light-gray': '#C5C5C5',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      }     
    },
  },
  plugins: [],
};