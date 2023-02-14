/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
            DEFAULT: '#012A4A',
            '100': '#013A63',
            '200': '#01497C',
            '300': '#014F86',
            '400': '#2A6F97',
            '500': '#2C7DA0',
            '600': '#468FAF',
            '700': '#61A5C2',
            '800': '#89C2D9',
            '900': '#A9D6E5',
        },
      },
    },
  },
  plugins: [],
}
