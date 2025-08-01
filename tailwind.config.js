// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'jump-constant': {
          '0%, 100%': { transform: 'translateY(0)' }, 
          '50%': { transform: 'translateY(-10px)' }, 
        },
      },
      animation: {
        'jump-constant': 'jump-constant 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};