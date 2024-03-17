/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'grey-blue':'#CCD8E3',
        'btn-blue':'#1E36B0',
        'btn-black':'#41a3ff'
      },
    },
  },
  plugins: [],
};
