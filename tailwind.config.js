/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta caramelo / creme — ajuste fino feito para contraste AA
        caramel: {
          DEFAULT: '#A87852', // caramelo principal
          light: '#C8A17F',   // caramelo claro
          deep: '#96633E',    // caramelo profundo (usado no CTA p/ contraste)
        },
        cream: '#F4EEE6',     // creme
        offwhite: '#FAF8F4',  // off-white
        espresso: '#332820',  // marrom escuro (texto principal)
        mocha: '#6B5744',     // marrom médio (texto secundário)
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: '460px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(51,40,32,0.05), 0 6px 20px rgba(51,40,32,0.07)',
        'soft-lg': '0 2px 6px rgba(51,40,32,0.07), 0 14px 34px rgba(51,40,32,0.12)',
        cta: '0 1px 2px rgba(51,40,32,0.08), 0 16px 40px rgba(94,60,34,0.22)',
        paper: '0 1px 2px rgba(51,40,32,0.04), 0 18px 44px rgba(51,40,32,0.10)',
      },
      letterSpacing: {
        widest2: '0.26em',
      },
    },
  },
  plugins: [],
}
