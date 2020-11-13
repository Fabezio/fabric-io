<script context="module">
  export function preload() {
    return this.fetch(`portfolio.json`)
      .then((r) => r.json())
      .then((portfolio) => {
        console.log(portfolio);
        return { portfolio };
      });
  }
</script>

<script>
  import HeadTitle from "../../components/UI/HeadTitle.svelte";
  import Card from "../../components/UI/Card.svelte";
  export let portfolio;
</script>

<!-- <div> -->
<HeadTitle title="Portfolio" />
<!-- {#if portfolio} -->
<!-- <h1 class="text-center mb-4">Portfolio</h1> -->
<!-- {#for i in portfolio} -->
<h2 class="text-center mb-3">Sites réalisés:</h2>
<div class="row">
  {#each portfolio as folio}
    {#if folio.mode == 'self'}
      <Card item={folio} />
    {/if}
  {/each}
</div>

<!-- <h2 class="text-center mb-3">Sites réalisés:</h2> -->
<h2 class="text-center mb-3">Sites créés en formation:</h2>
<div class="row">
  {#each portfolio as folio}
    {#if folio.mode === 'tuto'}
      <Card item={folio} />
    {/if}
  {/each}
</div>
