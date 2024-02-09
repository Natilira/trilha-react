/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']  // caso não carregue a selecionada carrega uma sans-serif 
      }
    },
  },
  plugins: [],
}

