<script>
	import Nav from '../components/UI/Nav.svelte';
	import Footer from '../components/UI/Footer.svelte';

	export let segment;
	const logo = "images/fabric-io.png";
</script>

<style>
	/* main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	} */
</style>

<Nav {segment} {logo} /> 

<main class="container">
	<slot {logo}></slot>
</main>

<Footer />

