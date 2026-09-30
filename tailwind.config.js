/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1C7A4B',
          greenDark: '#125233',
          greenSoft: '#EAF6EF',
          red: '#B33939',
          redSoft: '#FCEEEE',
          blue: '#1A2D8F',
          cream: '#F7F6F1'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(17, 24, 39, 0.08)'
      }
    }
  },
  plugins: []
};
