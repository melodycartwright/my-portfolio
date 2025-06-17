/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1f2937", // dark text 
        softwhite: "#f8fafc", // background 
        blush: "#f5e7e5", // muted blush 
        sage: "#dfeeea", // soft sage green
        
        primary: "#1e3a8a",
        secondary: "#38bdf8",
        accent: "#facc15",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // for body text
        serif: ["Playfair Display", "serif"], // for headings
      },
    },
  },
  plugins: [],
};
