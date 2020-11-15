<script>
  export let status;
  export let error;
  error.message = "Page non trouvée";

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  h1 {
    margin: 0 auto;
    font-size: 2.8em;
    font-weight: 700;
    /* margin: 0 0 0.5em 0; */
  }

  /* p {
		margin: 0 auto;
		margin: 1em auto;
	} */

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="jumbotron jumbotron-danger">
  <h1>{status} - {error.message}</h1>
  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
  <!-- {error.length}
	{#each error as err}
		<span>{err}</span>
	{/each} -->
</div>

<div class="float-right"><a href=".">retour à l'accueil</a></div>
