/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './Src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      primary: '#16214E',
      white: '#FFFFFF',
      black: '#000000',
      gray1: '#e9e9e9',
      gray2: '#d3d3d3',
      gray3: '#D9D9D9',
      gray4: '#bdbebd',
      gray5: '#6A6A6A',
      purple: '#BBC8FF',
    },
    borderWidth: {
      DEFAULT: '1px',
      0.5: '0.25px',
    },
  },
  plugins: [],
};

