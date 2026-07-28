import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        accent: '#c9a227',
        midnight: '#050505',
      },
    },
  },
  plugins: [],
} satisfies Config;
