import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
  leistungen: defineCollection({
    // Load Markdown files in the src/content/leistungen directory.
    loader: glob({ base: './src/content/leistungen', pattern: '**/*.md', }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      weight: z.number(),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
  projekte: defineCollection({
    // Load Markdown files in the src/content/projekte directory.
    loader: glob({ base: './src/content/projekte', pattern: '**/*.md', }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
      img_position: z.string().optional(),
    }),
  }),
};
