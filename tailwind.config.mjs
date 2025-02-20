// tailwind.config.mjs
import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '6xl': '4rem', // Default 3.75rem, but we make it 4rem
        '7xl': '5rem', // Custom larger size
        '8xl': '6rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
