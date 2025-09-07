/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        darkModeSlide: {
          "0%": {
            translate: "0 0",
          },
          "100%": {
            translate: "2.5rem 0",
          },
        },
        lightModeSlide: {
          "0%": {
            translate: "2.5rem 0",
          },
          "100%": {
            translate: "0 0",
          },
        },
      },
      animation: {
        "light-to-dark": "darkModeSlide 0.3s ease-in-out forwards",
        "dark-to-light": "lightModeSlide 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
