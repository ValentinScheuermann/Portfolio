/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#0fe3ebf3",     
        "secondary": "#56a4ca", 
        "accent": "#38bdf8",     
        "neutral": "#F6EDD9",  
        "base-100": "#F3FCF4",    
        "info": "#4ab5ff",  
        "success": "#00e38c", 
        "warning": "#fef08a", 
        "error": "#ff7781",
        },
      },
    ],
  },
};
