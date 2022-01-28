import { slugFromPath } from '$lib/util.js'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(params) {
  const limit = params?.searchParams?.get(`limit`) || Infinity
  if (Number.isNaN(limit)) {
    return {
      status: 400
    }
  }
  const postFiles = Object.entries(import.meta.glob(`./*.{md,svx,svelte.md}`))

  const posts = await Promise.all(
    postFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      return {
        ...metadata,
        slug: slugFromPath(path)
      }
    })
  )

  const processedPosts = posts
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
    .filter((post) => post.published)

  return {
    body: processedPosts.slice(0, limit)
  }
}
