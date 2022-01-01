import remarkGithub from 'remark-github'
import remarkAbbr from 'remark-abbr'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const config = {
  extensions: ['.svelte.md', '.md', '.svx'],
  layout: {
    posts: 'src/routes/posts/_posts.svelte',
    _: 'src/routes/_page.svelte'
  },
  smartypants: {
    dashes: 'oldschool'
  },
  remarkPlugins: [
    [
      remarkGithub,
      {
        repository: 'https://github.com/qbunt/sveltekit-foundation.git'
      }
    ],
    remarkAbbr
  ],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: 'wrap'
      }
    ]
  ]
}

export default config
