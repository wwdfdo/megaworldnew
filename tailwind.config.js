/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        OpenPlatform: "url('/src/Assets/images/downtown.jpg')",
      },
    },
  },
  plugins: [],
};
