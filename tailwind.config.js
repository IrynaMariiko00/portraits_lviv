/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        blueLight: "var(--color-blue-light)",
        blueDark: "var(--color-blue-dark)",
        gray: "var(--color-gray)",
        grayLight: "var(--color-gray-light)",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        krub: ["Krub", "sans-serif"],
      },
    },
  },
  plugins: [],
};
