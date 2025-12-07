/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // for App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // for Pages Router
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        back: "#1C1C1C",
        pur: "#7524A2",
        lav: "#9A6AE8",
        cblue: "#4DB4F5",
      },
    },
  },
  plugins: [],
};
