
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#e60000',
          dark: '#1a1a1a',
          gray: '#2d2d2d',
          light: '#f5f5f5'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
}
