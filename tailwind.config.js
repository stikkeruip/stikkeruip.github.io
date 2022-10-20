module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        courgette: ["Courgette", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        homeBg: "url('assets/images/bannerBg.png')",
        projectBg: "url('assets/images/projectBg.jpg')",
      },
      colors: {
        secondary: "#45aaf2",
      },
      screens: {
        lgC: "1350px",
        navBreak: "900px",
      },
      gridTemplateColumns: {
        aboutLg: "repeat(1, 30% 1fr)",
      },
    },
  },
  plugins: [],
};
