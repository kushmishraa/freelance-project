/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "smallMobile": "360px",
        "mobile": "375px",
        "largeMobile": "425px",
      },
      colors: {
        "grey": "#94A7AE"
      }
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
