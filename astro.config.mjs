import fs from 'node:fs';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Case studies still marked comingSoon have no body content yet (thin/empty
// pages) — keep them out of the sitemap so Google isn't asked to index them
// before there's anything real to show. Derived from the source files so
// this stays correct automatically as projects launch or get added.
const projectsDir = new URL('./src/content/projects/', import.meta.url);
const comingSoonSlugs = fs.readdirSync(projectsDir)
  .filter((f) => f.endsWith('.md'))
  .filter((f) => /comingSoon:\s*true/.test(fs.readFileSync(new URL(f, projectsDir), 'utf-8')))
  .map((f) => f.replace(/\.md$/, ''));

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      // /for-recruiters is a private section linked only from a CV, and every
      // page in it is noindex — it must never be submitted to search engines.
      filter: (page) =>
        !page.includes('/for-recruiters') &&
        !comingSoonSlugs.some((slug) => page.includes(`/case-studies/${slug}`)),
    }),
  ],
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
