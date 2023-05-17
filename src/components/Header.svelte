<script lang="ts">
  import { config } from '$lib/siteConfig.js'
  import logo from '$lib/assets/logomark.svg'
</script>

<nav>
  <a href="/" class="title">
    <img src={logo} alt="jeremy bunting's logo" />
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
    font-weight: 700;
  }

  .links {
    margin-block: var(--size-7);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  li::marker {
    content: '';
  }
  li:last-child::marker {
    content: '';
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
