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
        "hero-mixer": "url('/assets/bg-mixer.jpg')",
        "hero-music": "url('/assets/hero-music.jpeg')",
        "hero-cheer": "url('/assets/hero-cheer.jpeg')",
        "hero-mic": "url('/assets/hero-mic.jpeg')",
      },
    },
  },
  plugins: [],
};

module.exports = config;
