---
title: "A second blog post"
description: "Dolor amet velit ad ex."
date: "2021-12-01"
updated: "2021-11-01"
published: true
excerpt: Check out how heading links work with this starter in this post.
---

# Qui occaecat laboris

Qui occaecat laboris irure sunt irure enim adipisicing nisi laborum occaecat dolore consequat proident.

## laborum adipisicing velit consequat elit enim

Minim velit laborum adipisicing velit consequat elit enim in est commodo sunt ut. Veniam amet amet sit ex duis incididunt laboris laborum cillum mollit anim. Amet tempor do duis cillum dolore exercitation. Ad pariatur aliqua aute culpa est mollit ad id amet do esse dolore officia consequat. Proident consequat sunt enim cupidatat non et amet consequat duis fugiat. Adipisicing id pariatur velit ad aliquip fugiat irure ea. Incididunt aliqua dolore veniam ullamco consectetur ad sint veniam excepteur. Anim ex aute esse sunt fugiat id irure fugiat qui ipsum sint ad sit dolor. Lorem eu ad consectetur ea quis aliqua. Id eu esse exercitation duis.

```js
 const allPosts = await Promise.all(
    postFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      return {
        ...metadata,
        slug: slugFromPath(path)
      }
    })
  )
```

```svelte
<script lang="ts">
  import { config } from '$lib/siteConfig.js'
  import logo from '$lib/assets/logomark.svg'
</script>

<footer>
  <p>{config.siteTitle} &copy {new Date().getFullYear()}</p>
</footer>

<style>
  footer {
    padding-block: var(--size-7);
    border-top: 1px solid var(--border);
  }

  p {
    color: var(--text-2);
  }
</style>

```
