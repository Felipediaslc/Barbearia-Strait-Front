/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,png,jpg}"],
  theme: {
   
    extend: {
    
      colors: {
     
        amarelo: '#ED8C1A',
       
      },
      backgroundImage: {
        'corp-pattern': "url('/src/Pages/Login/imag/background.png')",
        'quem-pattern': "url('/src/Pages/Quem-somos/imag/pexels-nikolaos-dimou-022.jpg')",
        'logo-home': "url('/src/Pages/Homee/imag/logs01.png')",
        'logo-galeria': "url('/src/Pages/Servicos/imag/servico.png')",
        'logo-servico': "url('/src/Pages/Servicos/imag/11-barbearias-em-goiania-com-estilo-vintage-que-voce-precisa-conhecer.jpeg')",
      },

      fontFamily: {
        'sans': ['Balthazar'],
       'saira': ['Saira Semi Condensed'],
       
      },
      screens: {
        'sm': { 'max': '480px'},
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

