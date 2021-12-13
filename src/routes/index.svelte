<script>
  import { initClient, defaultExchanges } from '@urql/svelte';
  import { devtoolsExchange } from '@urql/devtools';

  import Characters from '../components/Characters.svelte'
  initClient({
    url: import.meta.env.VITE_GRAPHQL_URL,
    exchanges: [devtoolsExchange, ...defaultExchanges],
  });
</script>
<Characters/>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
