/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'cards': '-2px -2px 5px rgba(0, 0, 0, 0.05), 5px 5px 5px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#0D4C92",
        text: "#00FFAB",
        lightSecondary: "rgba(13, 76, 146, 0.2)",
        blackText: "rgba(0, 0, 0, 1)"
      },
      fontFamily:{
        poppins: "Poppins"
      }
    },
    screens: {
      xs: "340px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  variants: ["responsive", "hover", "focus"],
  plugins: [],
};