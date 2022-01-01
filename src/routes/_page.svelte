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
<p>{date}</p>
<p>{title}</p>
<h2>I'm a page</h2>
<slot />