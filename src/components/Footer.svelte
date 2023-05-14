<script lang="ts">
  import { config } from '$lib/siteConfig.js'
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
