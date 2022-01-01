<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    const posts = await fetch('/posts.json').then(res => res.json())
    return {
      props: {
        posts
      }
    };
  }
</script>
<!--<Characters/>-->
<script>
	export let posts
</script>
{#each posts as { slug, title, author, description, date }}
	<a href="/posts/{slug}">{title}</a>
{/each}
