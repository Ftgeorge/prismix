/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      fontSize: {
        'section-header': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }], // 40px
      },
      colors: {
        'primary': {
          DEFAULT: '#008753',
          50: '#e0f7ee',
          100: '#b3ebd3',
          200: '#80ddb5',
          300: '#4dcf97',
          400: '#26c47f',
          500: '#008753', // Main
          600: '#00774a',
          700: '#005e3a',
          800: '#004729',
          900: '#002d19',
        },
      },
    },
  },
  safelist: [
    'section-header',
    'text-section-header',
    'font-bold',
    'text-center',
    'mb-8',
  ],
  plugins: [],
};
