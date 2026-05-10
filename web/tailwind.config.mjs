/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Mediterranean warm palette
        bone: {
          DEFAULT: '#FAF6F1',
          50: '#FDFBF8',
          100: '#FAF6F1',
          200: '#F1EAE0',
        },
        terracotta: {
          DEFAULT: '#C2613D',
          50: '#FAEDE7',
          100: '#F0CFC0',
          400: '#D27957',
          500: '#C2613D',
          600: '#A14E2F',
          700: '#7E3D24',
        },
        ink: {
          DEFAULT: '#2A2622',
          500: '#2A2622',
          400: '#4A4540',
          300: '#7A736C',
          200: '#B5AEA7',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'screen-xl': '1280px',
      },
    },
  },
  plugins: [],
}
