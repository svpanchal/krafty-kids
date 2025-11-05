/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          serif: ['Playfair Display', 'serif'],
        },
        colors: {
          kk: {
            50:  '#ECEFF3', // light gray
            100: '#E6D8DA', // blush
            500: '#E55757', // coral/red
            700: '#655055', // warm mauve
            900: '#3F4247', // charcoal
          },
        },
        boxShadow: { brand: '0 10px 30px rgba(0,0,0,.25)' },
        borderRadius: { 'xl2': '1.25rem' },
      },
    },
    plugins: [],
  };
  