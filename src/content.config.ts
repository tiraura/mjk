// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Astro v5/v6以降の標準ローダー

const blog = defineCollection({
    // src/content/blog フォルダ内のMarkdownファイルを監視して読み込む設定
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
    // frontmatter（記事上部の一番上のデータ）のルールを定義
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        description: z.string().optional(),
    }),
});

export const collections = { blog };