const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
    theme: {
      container: {
        center: true,
        padding: '1rem',
        margin: '1rem'
      },
      extend : {
        colors: {
            'light-blue': '#2D9CDB',
            DEFAULT: '#1fb6ff',
            dark: '#009eeb',
          pink: {
            light: '#ff7ce5',
            DEFAULT: '#ff49db',
            dark: '#ff16d1',
          },
          gray: {
            darkest: '#1f2d3d',
            dark: '#3c4858',
            DEFAULT: '#c0ccda',
            light: '#e0e6ed',
            lightest: '#f9fafc',
          }
        }
      },
      
      fontFamily: {
        'heebo': ['Heebo', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'] 
      },
      extend: {
        lineHeight: {
          'extra-loose': '2.5',
          '12': '5.5rem',
        }
      }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
