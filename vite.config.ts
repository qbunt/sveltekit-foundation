import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

/** @type {import('@sveltejs/kit').Config} */
const config: UserConfig = {
  plugins: [sveltekit()]
};

export default config;


// import { mdsvex } from 'mdsvex';
// import mdsvexConfig from './mdsvex.config.js';
// import adapter from '@sveltejs/adapter-auto';
// import path from 'path';
// import autoprefixer from 'autoprefixer';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   extensions: ['.svelte', ...mdsvexConfig.extensions],

//   kit: {
//     adapter: adapter(),

//     // hydrate the <div id="svelte"> element in src/app.html
//     // target: '#svelte',
//     vite: {
//       resolve: {
//         alias: {
//           $actions: path.resolve('./src/actions'),
//           $components: path.resolve('./src/components'),
//           $data: path.resolve('./src/data'),
//           $stores: path.resolve('./src/stores'),
//           $styles: path.resolve('./src/styles'),
//           $svg: path.resolve('./src/svg'),
//           $utils: path.resolve('./src/utils')
//         }
//       },
//       optimizeDeps: {
//         exclude: ['@urql/svelte']
//       }
//     }
//   },

//   preprocess: [mdsvex(mdsvexConfig), autoprefixer]
// };

// export default config;
