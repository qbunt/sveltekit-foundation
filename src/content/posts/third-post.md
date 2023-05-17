---
title: "A third blog post"
description: "Commodo reprehenderit duis enim."
date: "2023-03-01"
updated: "2023-03-27"
published: true
excerpt: Sunt aliqua et incididunt deserunt voluptate duis ullamco Lorem commodo anim consectetur sint magna nulla.
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
