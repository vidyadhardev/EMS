/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        // font importin index.html on google font
        "Ga+Maaml":["Ga+Maamli","sans-serif"]
      }
    },
  },
  plugins: [],
}

