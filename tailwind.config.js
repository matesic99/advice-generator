module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{


      //Primary

      'light-cyan': 'hsl(193, 38%, 86%)',
      'neon-green': 'hsl(150, 100%, 66%)',
    
      // Neutral
    
      'grayish-blue': 'hsl(217, 19%, 38%)',
      'dark-grayish-blue': 'hsl(217, 19%, 24%)',
      'dark-blue': 'hsl(218, 23%, 16%)'
    
    
    
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },

      extend: {
        boxShadow: {
          "dice-button": "0 0px 20px 6px hsl(150deg 100% 66% / 55%)",
        },
      
    },
  },
  plugins: [],
}