/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'bricolage': ['Bricolage Grotesque', 'sans-serif']
      },
      dropShadow: {
        'custom': ' 4px 10px 13px rgba(0,0,0,0.15)',

      }
    },
  },
  plugins: [],
}

