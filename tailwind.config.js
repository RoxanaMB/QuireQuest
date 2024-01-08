/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'portage': {
          '50': '#f1f6fc',
          '100': '#e6eef9',
          '200': '#d2dff3',
          '300': '#b7caea',
          '400': '#99ade0',
          '500': '#8596d6',
          '600': '#6672c5',
          '700': '#5660ac',
          '800': '#47508c',
          '900': '#3f4670',
          '950': '#252841',
        }, 

        'polo-blue': {
          '50': '#dae1fb',
          '100': '#c7d9f9',
          '200': '#abcbf7',
          '300': '#82b5f3',
          '400': '#549ced',
          '500': '#3280e7',
          '600': '#1f65d6',
          '700': '#205bbc',
          '800': '#1c4b97',
          '900': '#184177',
          '950': '#102742',
        },
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'josefine': ['Josefin Sans', 'sans-serif'],
        'tenor': ['Tenor Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
