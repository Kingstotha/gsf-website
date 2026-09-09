/** @type {import('tailwindcss').Config} */
// The whole palette and type scale live here on purpose: nothing outside these
// tokens exists, so the old cream, red, blue and soft-shadow styles cannot creep back.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      paper: '#FFFFFF',
      ink: '#141414',
      pencil: '#5B5B5B',
      hairline: '#D4D4D4',
      green: '#1C7A4B',
      deepgreen: '#125233'
    },
    fontFamily: {
      sans: ['Archivo', '"Helvetica Neue"', 'Arial', 'sans-serif']
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.2' }],
      small: ['0.875rem', { lineHeight: '1.45' }],
      nav: ['0.9375rem', { lineHeight: '1.2' }],
      base: ['1rem', { lineHeight: '1.5' }],
      body: ['1.0625rem', { lineHeight: '1.6' }],
      lead: ['1.25rem', { lineHeight: '1.45' }],
      row: ['1.375rem', { lineHeight: '1.1', fontWeight: '700' }],
      h2: ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
      name: ['clamp(1.75rem, 5vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.01em', fontWeight: '600' }],
      room: ['clamp(5rem, 18vw, 10.5rem)', { lineHeight: '0.9', letterSpacing: '-0.03em', fontWeight: '800' }]
    },
    borderRadius: {
      none: '0',
      full: '9999px'
    },
    boxShadow: {
      none: 'none'
    },
    extend: {
      maxWidth: {
        page: '68rem',
        prose: '44rem'
      }
    }
  },
  plugins: []
};
