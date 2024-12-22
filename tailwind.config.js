/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smaller: "475px",
        small: "525px",
        medium: "875px",
        large: "1425px",
      },
    },
  },
  plugins: [],
};
