<!--<script>-->
<!--  import { initClient, defaultExchanges } from '@urql/svelte';-->
<!--  import { devtoolsExchange } from '@urql/devtools';-->

<!--  import Characters from '../components/Characters.svelte'-->
<!--  initClient({-->
<!--    url: import.meta.env.VITE_GRAPHQL_URL,-->
<!--    exchanges: [devtoolsExchange, ...defaultExchanges],-->
<!--  });-->
<!--</script>-->
<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ fetch }) {
    // Use a `limit` querystring parameter to fetch a limited number of posts
    // e.g. fetch('posts.json?limit=5') for 5 most recent posts
    const posts = await fetch('/posts.json').then((res) => res.json());
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

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
