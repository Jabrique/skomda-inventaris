/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'natural-8': '#EDEDED',
        'natural-6': '#C2C2C2',
        'natural-7': '#E0E0E0',
        'natural-4': '#757575',
        'natural-1' : '#0A0A0A',
        'natural-5' : '#9E9E9E',
        'natural-20' : '#F5F5F5',
        'mainbg' : '#FDEAEA',
        'main': '#E4252C',
        'main_hover' : '#FF373F',
      },
      boxShadow: {
        'sidebar': '9px 4px 78px 0px rgba(0, 0, 0, 0.05);',
        'formBarang': '0px 0px 55.7px 0px rgba(0, 0, 0, 0.07);',
      },
      screens: {
        'hp': '319px',
        'tablet': '768px',  
        'laptop': '1024px',  
        'desktop': '1280px',
        'desktop-lg': '1440px',
      },
      gridTemplateColumns: {
        '2columns': '280px 1fr',
      },
      gridTemplateRows: {
        'tabletRows': '86px 1fr',
      },
    },
  },
  plugins: [],
}

