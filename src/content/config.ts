import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    year: z.number(),
    comingSoon: z.boolean().optional().default(false),
    liveUrl: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { projects };
