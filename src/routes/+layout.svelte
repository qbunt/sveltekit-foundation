<script>
  import '@fontsource/nunito'
  import Footer from '$components/Footer.svelte'

  import 'open-props/style'
  import 'open-props/normalize'
  import 'open-props/buttons'
  import Header from '$components/Header.svelte'
  import '$styles/app.css'
  import { fly } from 'svelte/transition'
  import SvelteSeo from 'svelte-seo'
  import { config } from '$lib/siteConfig.js'
  export let data
</script>

<SvelteSeo title={config.siteTitle} description={config.siteDescription} />

{#key data.url}
  <div class="layout">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
{/key}

<style>
  .layout {
    height: 100%;
    max-inline-size: 1440px;
    display: grid;
    grid-template-rows: auto 1fr auto;
    margin-inline: auto;
    padding-inline: var(--size-7);
  }

  main {
    padding-block: var(--size-9);
  }

  @media (min-width: 1440px) {
    .layout {
      padding-inline: 0;
    }
  }
</style>
