/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Tilt Warp"],
        header: ["Anton"],
      },
      backgroundImage: {
        hero1: "url('/assets/bg-cropped.jpeg')",
      },
    },
  },
  plugins: [],
  variants: {
    display: ["group-hover"],
  },
};

module.exports = config;
