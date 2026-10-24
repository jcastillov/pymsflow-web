/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#07090E',
          card: '#0B0F1A',
          border: 'rgba(255, 255, 255, 0.08)',
          emerald: '#10B981',
          violet: '#8B5CF6',
        },
      },
    },
  },
  plugins: [],
};
