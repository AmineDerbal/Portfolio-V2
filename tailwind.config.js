/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#2c2c34',
        secondary: '#aaa6c3',
        tertiary: '#2c2c9c',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        nav: '#072448',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [],
};
