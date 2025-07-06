// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'jump-constant': {
          '0%, 100%': { transform: 'translateY(0)' }, // Posición inicial y final
          '50%': { transform: 'translateY(-10px)' }, // Salta 10px hacia arriba en la mitad de la animación
        },
      },
      animation: {
        'jump-constant': 'jump-constant 1s ease-in-out infinite', // 1s de duración, suave, y se repite infinitamente
      },
    },
  },
  plugins: [],
};