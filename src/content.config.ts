import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const mensonges = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/mensonges' }),
	schema: z.object({
		title: z.string(),
		personality: z.string(),
		date: z.coerce.date(),
		summary: z.string(),
		quote: z.string().optional(),
		sources: z.array(
			z.object({
				label: z.string(),
				url: z.string().url(),
			}),
		),
	}),
});

export const collections = { mensonges };
