<script>
	import "$styles/app.css";
	import Footer from "$components/Footer.svelte";
</script>
<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css" />
</svelte:head>
<main>
	<slot/>
	<Footer name={import.meta.env.VITE_SITE_AUTHOR}/>
</main>