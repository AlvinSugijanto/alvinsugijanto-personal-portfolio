/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'bricolage': ['Bricolage Grotesque', 'sans-serif']
      },
      dropShadow: {
        'custom': '4px 10px 13px rgba(0,0,0,0.15)',
        'navbar': [
          "0 0 5px theme('colors.sky.500')",
          "0 0 20px theme('colors.sky.900')",
        ] 
      },
      fontSize : {
        clamp : "clamp(0.8rem, 2vw, 1.2rem)"
      }
    },
  },
  plugins: [],
}

