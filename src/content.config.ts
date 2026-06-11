import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['es', 'en']),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const wyse = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['es', 'en']),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, wyse };
