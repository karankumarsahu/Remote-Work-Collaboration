import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif"
      },
      backgroundImage:{
        'primary': "linear-gradient(90deg, rgba(0,53,85,1) 0%, rgba(0,59,95,1) 35%, rgba(0,34,57,1) 100%)",
        'primary-down': "linear-gradient(180deg, rgba(0,53,85,1) 0%, rgba(0,59,95,1) 35%, rgba(0,34,57,1) 100%)",
        'nav-sidebar-bg': "linear-gradient(131deg, rgba(10,25,35,1) 0%, rgba(10,32,46,1) 35%, rgba(10,32,46,1) 100%)"
      },
      gridTemplateColumns: {
        '13': "repeat(20, minmax(0, 1fr))"
      },
      gridColumnEnd: {
        '18': '18',
      }
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "dim"],
  },
}