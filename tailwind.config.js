/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      peaxBold: "peaxBold",
      peaxLight: "peaxLight",
      amsterdam: "amsterdam",
      greatvibe: "greatvibe",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
