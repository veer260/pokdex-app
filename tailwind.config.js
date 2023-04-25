/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      bit: ["Press Start 2P"],
      raleway: ["Raleway"],
    },
    extend: {
      dropShadow: {
        imageShadow: "20px 10px 10px rgba(20, 18, 18, 0.5058823529)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
