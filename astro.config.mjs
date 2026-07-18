import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://www.natasaminic.com',
  markdown: {
    shikiConfig: {
      themes: {
        dark:  'github-dark-dimmed',
        light: 'github-light',
      },
    },
  },
});
