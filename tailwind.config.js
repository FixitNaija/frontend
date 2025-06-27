// tailwind.config.js

export default {
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 10s linear infinite',
      },
    },
  },
  plugins: [],
}