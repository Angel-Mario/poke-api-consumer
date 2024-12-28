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
      width: {
        fillAvailable: "-webkit-fill-available",
      },
      height: {
        fillAvailable: "-webkit-fill-available",
      },
      screens: {
        smaller: "475px",
        small: "525px",
        intermed: "745px",
        medium: "875px",
        navBar: "1010px",
        mlarge: "1200px",
        large: "1425px",
        extraLarge: "1900px",
      },
    },
  },

  plugins: [],
};
