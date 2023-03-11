/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Tilt Warp"],
        header: ["Anton", "sans-serif"],
      },
      backgroundImage: {
        hero1: "url('/assets/bg-cropped.jpeg')",
      },
      colors: {
        primary: "#2775AD",
      },
    },
  },
  plugins: [],
  variants: {
    display: ["group-hover"],
  },
};

module.exports = config;
