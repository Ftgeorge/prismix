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
        'section-header': '#1A2A4E', // Deep blue, matches brand/dark text
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
