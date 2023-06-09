/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "work-layout": "auto 1fr auto",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
      animation: {
        typing: "typing 1.5s steps(40, end)",
      },
    },
    fontFamily: {
      logo: ["Shadows Into Light", "Poppins", "sans-seriff"],
      body: ["Poppins", "sans-seriff"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      primary: {
        DEFAULT: "#0d1321",
        darker: "#1d2d44",
        dark: "#3e5c76",
        light: "#748cab",
        lighter: "#afbdcf",
      },
      secondary: {
        DEFAULT: "#f0ebd8",
        light: "#f8f4e1",
      },
    },
    container: {
      center: true,
    },
    boxShadow: {
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'inner-lighter':  `inset 0 0 0 2em #afbdcf`,
    },
  },
  plugins: [],
};
