<script lang="ts">
  import { config } from '$lib/siteConfig.js'
</script>

<nav>
  <a href="/" class="title">
    <img src="image/logomark.svg" alt="jeremy bunting's logo" />
  </a>

  <ul class="links">
    {#each config.headerNav as link}
      <li>
        <a href={link.link}>{link.name}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    padding-block: var(--size-7);
  }

  .links {
    margin-block: var(--size-7);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    text-decoration: none;
  }
  li::marker {
    display: none;
  }
  @media (min-width: 768px) {
    nav {
      display: flex;
      justify-content: space-between;
    }

    .links {
      display: flex;
      gap: var(--size-7);
      margin-block: 0;
    }
  }
</style>
