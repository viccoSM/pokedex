const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      normal: '#D1D1CB',
      poison: '#AA5DA3',
      psychic: '#F267B2',
      grass: '#8BD84F',
      ground: '#ECCB55',
      ice: '#95F1FE',
      fire: '#F95046',
      rock: '#CEBC74',
      dragon: '#8B76FF',
      water: '#50B1FE',
      bug: '#C3D21F',
      dark: '#8E6956',
      fighting: '#A9574F',
      ghost: '#7975D3',
      steel: '#C2C0D6',
      flying: '#79A4FF',
      electric: '#FCE53D',
      fairy: '#FAADFF'
    }
  },
  plugins: [],
}