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

const work = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    year: z.number().optional(),
    tags: z.array(z.string()).optional().default([]),
    liveUrl: z.string().optional(),
    altUrl: z.string().optional(),
    altLabel: z.string().optional(),
    comingSoon: z.boolean().optional().default(false),
    caseStudySlug: z.string().optional(),
  }),
});

export const collections = { projects, work };
