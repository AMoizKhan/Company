/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/Component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

