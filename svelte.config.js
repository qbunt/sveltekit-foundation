import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import autoprefixer from 'autoprefixer';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  kit: {
    adapter: adapter(),
    alias: {
      '$styles': 'src/styles',
      '$components': 'src/components',
      '$content': 'src/content'
    }
  },
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      // Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
    }),
    autoprefixer
  ]
}

export default config;
