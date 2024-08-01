/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'telefono':'480px',
      },
      colors:{
        'body': '#e6e6f0', 
        'azul':'#0F216F',
        'azul-claro':'#f7f9fc',
        'borde-text':'#F4F8FC',
        'gris-oscuro':'#585E6C',
        'gris':'#A2A6AF'
      }
    },
  },
  plugins: [],
}

