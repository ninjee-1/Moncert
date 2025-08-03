export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primaryBlue: "var(--primary-blue)",
        grayOne: "var(--text-color-1)",
        grayLight: "var(--text-color-2)",
        grayThree: "var(--text-color-3)",
        grayFive: "var(--text-color-3)",
      },
    },
  },
  plugins: [],
};
