/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Tilt Warp"],
        header: ["Anton"],
      },
    },
  },
  plugins: [],
  variants: {
    display: ["group-hover"],
  },
};

module.exports = config;
