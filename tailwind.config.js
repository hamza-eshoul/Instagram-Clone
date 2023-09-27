/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        instGrayish: "#DBDBDB",
        lightBlue: "#0095F6",
        darkBlue: "#1877F2",
        lightDark: "#262626",
        hardDark: "#121212",
      },
      screens: {
        mdl: "875px",
      },
    },
  },
};
