/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        secondary: ["Kalnia", "sans-serif"],
        primary: ["Montserrat", "sans-serif"],
        Accent: ["Unbounded", "sans-serif"],
      },
      colors: {
        "background-light": "#F1F5F9",
        "background-dark": "#020617",

        "light-p": "#020617",
        "light-s": "#3F3F46",

        blue: "#818CF8",
        green: "#93E3FC",
        teal: "#2DD4BF",
        DarkBlue: "#5844D7",
        tealGrad: "#1F302E",

        "dark-p": "#FFFFFF",
        "dark-s": "#e9ecef",

        "dark-cards": "#111423",
        "light-cards": "#020617",
      },
      letterSpacing: {
        trackmod: "25px",
        center: "0",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        // Add the new xs breakpoint
        xs: "320px",
      },
    },
  },
  plugins: [],
};
