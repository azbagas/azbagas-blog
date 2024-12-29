import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/contents/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      featuredImage: image(),
      status: z.enum(['Public', 'Private']),
      completedDate: z.date(),
    }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/contents/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      featuredImage: image(),
      publishedDate: z.date(),
    }),
});

export const collections = { projects, posts };
