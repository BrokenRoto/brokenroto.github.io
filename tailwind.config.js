/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    colors: {
      blue: {
        DEFAULT: "#0d1321",
        light: "#748cab",
      },
      yellow: "#f0ebd8",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
