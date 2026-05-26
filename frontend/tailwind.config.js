/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        softwhite: "#f6f3f1",
        offwhite: "#f2eeeb",
        surface: "#ffffff",
        charcoal: "#1f1d21",
        blush: "#d7b2b8",
        sage: "#9cb7ad",
        indigo: "#59607a",
        slate: "#30364c",
        accent: "#7a3e56",
        accentHover: "#643347",
        blushHover: "#dfc0c5",
        sageHover: "#b9ccc4",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
