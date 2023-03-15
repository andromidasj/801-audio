/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Tilt Warp", "Tahoma", "Verdana", "sans-serif"],
        header: ["Anton", "Tahoma", "Verdana", "sans-serif"],
      },
      backgroundImage: {
        "hero-mixer": "url('/assets/bg-mixer.jpg')",
        "hero-music": "url('/assets/hero-music.jpeg')",
        "hero-cheer": "url('/assets/hero-cheer.jpeg')",
        "hero-mic": "url('/assets/hero-mic.jpeg')",
        "hero-portfolio": "url('/assets/portfolio-banner.jpeg')",
      },
    },
  },
  plugins: [],
};

module.exports = config;
