import { markdownPattern, slugFromPath } from '$lib/util'

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
  const modules = import.meta.glob(markdownPattern)

  let match
  for (const [path, resolver] of Object.entries(modules)) {
    if (slugFromPath(path) === params.slug) {
      match = [path, resolver]
      break
    }
  }

  if (!match) {
    return {
      status: 404
    }
  }

  const post = await match[1]()

  return {
    body: post.metadata
  }
}
