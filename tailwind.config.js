/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'librebarcode': 'LibreBarcode128Text',
      'roboto': 'Roboto',
      'roboto-light': 'Roboto-Light',
      'roboto-thin': 'Roboto-Thin',
      'roboto-mono': 'RobotoMono',
      'notosansmono-condensed': 'NotoSansMono-Condensed'
    },
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    }
  },
  plugins: [],
}

