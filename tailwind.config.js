const keyframes = require("./src/styles/tailwindStyles/animations/keyframes");
const animation = require("./src/styles/tailwindStyles/animations/animations");
const colors = require("./src/styles/tailwindStyles/colors");
const textColor = require("./src/styles/tailwindStyles/textColors");
const backgroundColor = require("./src/styles/tailwindStyles/backgroundColors");
const backgroundImage = require("./src/styles/tailwindStyles/backgroundImages");
const screens = require("./src/styles/tailwindStyles/screens");
const zIndex = require("./src/styles/tailwindStyles/zIndeces");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      system: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol"
      ]
    },
    extend: {
      animation,
      keyframes,
      colors,
      textColor,
      backgroundColor,
      backgroundImage,
      screens,
      zIndex
    }
  },
  plugins: []
};
