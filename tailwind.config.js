/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./**/*.html", "./**/*.js", "!./node_modules/**"],
  theme: {
    fontFamily: {
      sans: ["satoshi, sans-serif"],
      serif: ["sentient, serif"],
    },
    colors: {
      text: "#070909",
      background: "#ced4d9",
      primary: "#365352",
      secondary: "#9cadbf",
      accent: "#21A8A8",
      "dark-text": "#f6f8f8",
      "dark-background": "#262c31",
      "dark-primary": "#acc9c8",
      "dark-secondary": "#405163",
      "dark-accent": "#44dada",
    },
  },
  plugins: [],
};
