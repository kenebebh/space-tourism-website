/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      screens: {
        md: "600px",
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
