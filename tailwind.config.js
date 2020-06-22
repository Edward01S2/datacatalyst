const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      transparent: colors.transparent,
      current: colors.current,
    },
    extend: {
      colors: {
        'c-tan' : {
          100: '#f6faf3',
          200: '#eef1ea',
        },
        'c-blue' : {
          100: '#4d8dca',
          200: '#0e4162'
        },
        'c-teal' : {
          100: '#6ac4b1',
        },
        'c-gray' : {
          50: '#7a7a7a',
          100: 'rgba(45,48,57,.75)',
          200: 'rgb(51,51,51)',
          300: '#3d3d3d',
        }
      },
      fontFamily: {
        'futura' : ['Futura', 'futura', 'futura-pt',  'sans-serif'],
        'futura-c' : ['Futura Condensed', 'futura-pt-condensed', 'sans-serif'],
        'sorts-mill' : ['Sorts Mill Goudy', 'sorts-mill-goudy', 'serif']
      },
      borderWidth: {
        '3': '3px'
      },
      fontSize: {
        '7xl': '6rem',
        '8xl': '7rem',
        '9xl': '10rem',
      },
      rotate: {

      },
      spacing: {
        '108' : '32rem',
      },
      screens: {

      },
      boxShadow: {

      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
