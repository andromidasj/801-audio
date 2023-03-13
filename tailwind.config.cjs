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
        "hero-music": "url('/assets/hero-music.jpg')",
        "hero-cheer": "url('/assets/hero-cheer.jpeg')",
      },
    },
  },
  plugins: [],
  variants: {
    display: ["group-hover"],
  },
};

module.exports = config;
