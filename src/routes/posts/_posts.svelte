<script>
  import SvelteSeo from "svelte-seo";
  export let title
  export let date
  export let description
</script>

<SvelteSeo
  {title}
  {description}
/>

<slot />