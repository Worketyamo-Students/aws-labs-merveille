/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'orange': '#F35034',
        'orange2': '#E63E21',
        'blanct': '#FFFFFF',
        'page': '#1B1B1B',
        'noir': '#262626',
        'noirb': '#161616',
        'noirt': '#3F3E3E',
        'gris': '#C0C0C0',
    },
    fontFamily: {
        'inter': ["Inter", 'serif']
    }

    },
  },
  plugins: [],
}

