/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        "custom-off-white": "#EFF0F3",
        "custom-light-grey": "#E4E5E9",
        "custom-grey": "#C0C0C0",
        "custom-dark-grey": "#9A9494",
        "custom-black": "#2B2C34",
        "custom-blue": "#6246EA",
      },
    },
  },
  plugins: [],
};
