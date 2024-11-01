/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        restaurant: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'restaurant-pattern': "url('/pattern.png')",
      },
      colors: {
        restaurant: {
          primary: '#FF6B35',
          secondary: '#2E294E',
          accent: '#FFD23F',
        }
      }
    },
  },
  plugins: [],
};
