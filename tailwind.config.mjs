import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#a3a3a3',
            '--tw-prose-headings': '#e5e5e5',
            '--tw-prose-links': '#e5e5e5',
            '--tw-prose-bold': '#e5e5e5',
            '--tw-prose-hr': '#262626',
            '--tw-prose-bullets': '#525252',
            '--tw-prose-code': '#e5e5e5',
            '--tw-prose-pre-bg': '#161616',
            '--tw-prose-pre-code': '#e5e5e5',
          },
        },
      },
    },
  },
  plugins: [typography],
};
