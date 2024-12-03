/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 15px rgba(255, 0, 0, 0.5)', // Adjust the color and opacity here
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'body': { color: 'white' },
      });
    },
  ],
}
