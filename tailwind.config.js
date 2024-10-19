/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      sm: "400px",
      md: "600px",
      lg: "1000px",
      xl: "1100px",
    },
    extend: {
      // colors: {
      //   primary_color: "#150E28",
      //   secondary_color: "#903AFF",
      //   another: "#D434FE",
      //   boy: "ffffff08",
      // },
    },
  },
  plugins: [],
};
