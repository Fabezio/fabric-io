<script>
	import Nav from "../components/UI/Nav.svelte";
	import Footer from "../components/UI/Footer.svelte";

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
	.arrow {
		font-size: 1.25rem;
		color: navy;
	}
</style>

<Nav {segment} {logo} />
<div class="bg-default text-center p-2 border-bottom mb-4 ">
	<div class="mx-auto w-50 d-flex justify-content-center	">
		<div class="mr-5">
			<span class="">Certification de formation <span class="arrow">&rarr;</span></span>
			<a
				href="docs/attestation-de-formation-fabrice-riquet_b481967debe592ce3b4dc9325e533168d79f7168_49000_17-01-2021_17-Jan-2021.pdf"
				class="btn btn-success"
				download>Télécharger</a>
		</div>
		<!-- <hr class="rotate-90"> -->
		<div class="">
			<span class="">CV disponible <span class="arrow">&rarr;</span></span>
			<a
				href="docs/cv.docx"
				class="btn btn-outline-success"
				download>Télécharger</a>
		</div>
	</div>
</div>

<main class="container">
	<slot {logo} />
</main>

<Footer />
