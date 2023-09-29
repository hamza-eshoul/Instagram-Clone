/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        instGrayish: "#DBDBDB",
        lightBlue: "#0095F6",
        darkBlue: "#1877F2",
      },
      screens: {
        mdl: "875px",
        xsm: "425px",
      },
    },
  },
};
