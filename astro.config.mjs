import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://naca.dev',
  markdown: {
    shikiConfig: {
      themes: {
        dark:  'github-dark-dimmed',
        light: 'github-light',
      },
    },
  },
});
