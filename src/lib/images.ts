import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import type { CollectionEntry } from 'astro:content';

const imagesDir = fileURLToPath(new URL('../../public/images/', import.meta.url));

// thumbnails live on the matching `work` entry, falling back to the
// project-<slug>.webp naming convention when that file actually exists
export function imageForSlug(work: CollectionEntry<'work'>[], slug: string): string | undefined {
  const fromWork = work.find(w => w.data.caseStudySlug === slug)?.data.image;
  if (fromWork) return fromWork;
  const fallback = `project-${slug}.webp`;
  return existsSync(imagesDir + fallback) ? `/images/${fallback}` : undefined;
}
