import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    datePosted: z.coerce.date(),
    dateUpdated: z.coerce.date().optional(),
    author: z.object({
      name: z.string(),
      title: z.string(),
    }),
    hero: z.object({
      image: image(),
      description: z.string(),
      original: z.string().optional(),
      artist: z.string().optional(),
    }),
  }),
});

export const collections = { blog };
