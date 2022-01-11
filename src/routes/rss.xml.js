import { slugFromPath } from '$lib/util.js'

const config = {
  siteTitle: import.meta.env.VITE_SITE_TITLE,
  siteDescription: import.meta.env.VITE_SITE_DESCRIPTION,
  mySiteURL: import.meta.env.VITE_SITE_URL,
  siteLink: import.meta.env.VITE_SITE_LINK
}

export const get = async () => {
  const data = await Promise.all(
    Object.entries(import.meta.glob('./posts/*.md')).map(
      async ([path, page]) => {
        const { metadata } = await page()
        return { ...metadata, slug: slugFromPath(path) }
      }
    )
  ).then((posts) => {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  })

  const body = render(data)
  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${600}`,
    'Content-Type': 'application/xml'
  }
  return {
    body,
    headers
  }
}

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
  <title>${config.siteTitle}</title>
  <description>${config.siteDescription}</description>
  <link>${config.siteLink}</link>
  <atom:link href="https://${
    config.mySiteURL
  }/rss.xml" rel="self" type="application/rss+xml"/>
  ${posts
    .map(
      (post) => `<item>
        <guid isPermaLink="true">https://${config.mySiteURL}/posts/${
        post.slug
      }</guid>
        <title>${post.title}</title>
        <link>https://${config.mySiteURL}/blog/${post.slug}</link>
        <description>${post.description}</description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>`
    )
    .join('')}
  </channel>
</rss>
`
