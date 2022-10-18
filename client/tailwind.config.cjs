/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        "separator": "var(--separataor-color)",
        "secondary": "var(--secondary-color)",
        "secondary-light": "var(--secondary-color-light)",
        "secondary-dark": "var(--secondary-color-dark)"
      },
      textColor: {
        current: "var(--current-text-color)",
        accent: "var(--accent-text-color)"
      }
    }
  },
  plugins: [],
}