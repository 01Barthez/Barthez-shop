/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#ff8e24",
        primary2: "#ff8e24b3",
        primary3: "#ff7b0027",
        secondary: "#dd700a",
        secondary2: "#ff8e2480",
        secondary3: "#ff8e2426",
        light: "#f6f7ff",
        dark: "#010311"
      },

      width: {
        '50': "12.5rem",
        '75': "18.75rem"
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "4rem",
          lg: "8rem",
          // xl: "10rem",
          // "2xl": "12rem"
        }
      },

      fontFamily: {
        poppins: ["Poppins", "Verdana", "sans-serif"],
        Roboto: ["Roboto", "Verdana", "sans-serif"]
      }
    },
  },
  plugins: [],
}
