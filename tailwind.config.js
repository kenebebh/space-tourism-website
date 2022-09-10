/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        md: "600px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        barlowCondensed: ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
      colors: {
        "very-light-grey": "#D0D6F9",
      },
      borderRadius: {
        "fully-rounded": "1000rem",
      },
    },
  },
  plugins: [],
};
