/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        smaller: "475px",
        small: "525px",
        medium: "875px",
        navBar: "990px",
        mlarge: "1200px",
        large: "1425px",
        extraLarge: "1900px",
      },
    },
  },
  plugins: [],
};
