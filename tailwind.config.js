module.exports = {
  content: ["./*.{html,js}", "./assets/js/components/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#5C6451",
        secondary: "#E8BBBB",
        tertiary: "#DEF2FF",
      },

      scale: {
        102: "1.02",
      },
    },
  },
  variants: {
    extend: {
      display: ["hover", "group-hover"],
      scale: ["hover", "group-hover"],
      filter: ["group-hover"],
      height: ["group-hover"],
      brightness: ["group-hover"],
      invert: ["group-hover"],
      margin: ["group-hover", "first", "last"],
      textAlign: ["group-hover"],
      fontSize: ["group-hover"],
      justifyContent: ["hover"],
      alignItems: ["hover"],
      backgroundColor: ["active", "focus"],
      pointerEvents: ["hover"],
      borderWidth: ["responsive", "first", "last", "hover", "focus"],
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
