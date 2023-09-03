/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';
module.exports = {
  content: [
    // "./src/**/*.{js,jsx,ts,tsx}",
    // "./node_modules/flowbite/**/*.js"
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {
      padding: {
        'custom': '.5px'
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        customBlue: '#0C1326',
        customFontColorBlack:'#2A3B4F'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

