/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      montserrat: ["Montserrat"],
    },
  },

  plugins: [require("flowbite/plugin")],
  plugins: [require("daisyui")],
  plugins: [require("tw-elements/dist/plugin")],
};
