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
	export let folio

</script>


<div>
  <h1 class="text-center mb-4">{folio.name}</h1>
  <div class="flex items-center mx-auto">
    <div><img src="{folio.img}" alt="{folio.alt}" aspect-ratio="1.7" /></div>
    <div class="mx-auto">
      <h3>{folio.desc}</h3>
    </div>
  </div>
</div>