/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "work-layout": "auto 1fr auto",
      },
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
  },
  plugins: [],
};
