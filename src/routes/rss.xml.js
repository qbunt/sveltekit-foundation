import RSS from 'rss'
import { slugFromPath } from '$lib/util.js'
import { config } from '$lib/siteConfig'

const feed = new RSS({
  title: config.siteTitle,
  site_url: config.siteURL,
  feed_url: `${config.siteURL}/rss.xml`,
  description: config.siteDescription,
  author: config.siteAuthor,
  language: config.language,
  copyright: config.copyright,
  generator: `SvelteKit`
})

export const get = async () => {
  let allPosts = await Promise.all(
    Object.entries(import.meta.glob('./posts/*.md')).map(
      async ([path, page]) => {
        const { metadata, default: fullPage } = await page()
        return {
          ...metadata,
          slug: slugFromPath(path),
          // draw the rest of the 🦉
          rendered: fullPage.render().html
        }
      }
    )
  )

  let filteredPosts = allPosts.filter((post) => post.published)
  let sortedPosts = filteredPosts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )

  sortedPosts.forEach((post) => {
    feed.item({
      title: post.title,
      url: `${config.siteURL}/posts/${post.slug}`,
      date: post.date,
      description: post.rendered
    })
  })

  const body = feed.xml({ indent: true })

  return {
    body,
    headers: {
      'Cache-Control': `max-age=0, s-max-age=${600}`,
      'Content-Type': 'application/xml'
    }
  }
}
