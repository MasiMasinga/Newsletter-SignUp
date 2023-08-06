/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6257",
        secondary: "#242742",
        accent: "#36384E",
        grey: "#9294A0",
        white: "#FFFFFF",
      },
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
      screens: {
        xs: "300px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
      }
    },
  },
  plugins: [],
}

