<script>
  import { operationStore, query } from '@urql/svelte';
  const characters = operationStore(`
    query {
      characters {
        info {
          pages
          count
        }
        results {
            name
            gender
            image
            species
            status
          }
        }
      }
  `);
  query(characters);
</script>
{#if !$characters.fetching}
  <ul>
    {#each $characters.data.characters.results as char}
    <li>{char.name}</li>
    {/each}
  </ul>
{/if}
