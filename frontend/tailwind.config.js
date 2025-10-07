/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        softwhite: "#f7f7f7",
        charcoal: "#1e1e1e",
        blush: "#e1bebe",
        sage: "#b4d3c8",
        indigo: "#5e6472",
        slate: "#3b3f58",
        blushHover: "#e9cfcf",
        sageHover: "#cde0d8",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
