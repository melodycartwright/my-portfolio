/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",     // navy blue
        secondary: "#38bdf8",   // sky blue
        accent: "#facc15",      // soft yellow
        background: "#f8fafc",  // soft white/gray
        text: "#1f2937",        // dark gray for text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
