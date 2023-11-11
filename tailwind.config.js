module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        cyan: {
          '100': 'rgb(207, 250, 254)',
          '200': 'rgb(165, 243, 252)',
          '300': 'rgb(103, 232, 249)',
          '400': 'rgb(34, 211, 238)',
          // Add more shades or colors if needed
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
