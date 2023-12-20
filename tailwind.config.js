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
    screens: {
      xllmd: '700px',
      xxlsm: '540px',
      xlsm: '500px',
      lsm: '470px',
      msm: '395px',
      ssm: '360px'
    },
  },
  plugins: [],
};
