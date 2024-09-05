/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-color':'#39D5FF',
        'grey-color': '#39393D',
        'cream': '#FFF2E4',
        'btn-color': '#81E2FD',
        'eclipse': '#39D5FF36',
        'input-color': '#DADADA38',
        'star-background':'#EFF9FF'
      }
    },
  },
  plugins: [],
}