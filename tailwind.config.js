/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        devFont: ['Luckiest Guy', 'cursive'],
      }, //end of fontFamily
    },
  },
  plugins: [require('daisyui')],
};
