/** @type {import('tailwindcss').Config} */
const { fontSize, spacing } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      'DancingScript': ['Dancing Script', 'cursive']
    },
    extend: {
      backgroundImage: {
        'space-pattern': "url('./assets/spaceimage.webp')"
      },
      screens: {
        xxs:'360px',
        xs: '410px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '1xl': '1536px',
        '2xl': '1920px',
        '3xl': '2560px',
        '4xl': '3840px'
      },
      colors: {
        'teal': '#00ADB5',
        'vintage': '#251749',
        'lightblack': '#222831',
        'slate': '#393E46',
        'offwhite': '#EEEEEE'
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}