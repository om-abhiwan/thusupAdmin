/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans all components
    theme: {
      extend: {
        fontFamily: {
          thumsup: ["ThumsUp", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  