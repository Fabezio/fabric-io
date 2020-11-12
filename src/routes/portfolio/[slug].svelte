<script context="module">
export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`portfolio/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { folio: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import HeadTitle from "../../components/UI/HeadTitle.svelte"
	export let folio

</script>

<style>
	img {
		max-width: 640px;
	}
</style>


<!-- <div class="container"> -->
	<HeadTitle title={folio.name} />
	<!-- <h1 class="text-center mb-4">{folio.name}</h1> -->
	<div class="row py-4">
		<div class="col-md-6 col-sm-12">
			<img src="{folio.img}" alt="{folio.alt}"  />
			
		</div>
		<div class="col-md-6 col-sm-12">
			<h3 class="pl-3">{folio.desc}</h3>

		</div>

	</div>
  <!-- <div class="flex items-center mx-auto">
    <div>
		</div>
    <div class="mx-auto">
    </div>
  </div> -->
<!-- </div> -->