/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    listStyleType: {
      decimal: "decimal",
      roman: "upper-roman",
    },
    extend: {},
  },
  plugins: [],
};
