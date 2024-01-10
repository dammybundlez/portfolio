/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        Jost: ['Jost', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Lobster: ['Lobster', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif']
      }
    },
    screens:{
      'xs' : {'max' : '600px'},
      'sm' : '600px',
      'md': '768px',
      'lg': '992px',
    }
  },
  plugins: [],
}

