<script>
// import { domain } from "process";


  export let title
  export let subtitle = ""
  export let detail = ""
  const name = "fabric-io"

</script>

<svelte:head>
  {#if detail}
  <title>{name} | {title} | {detail}</title>
  {:else}
  <title>{name} | {title} </title>
  {/if}
</svelte:head>
<div class="text-center mt-5 mb-4">
  <h1>{title}</h1>
  
  {#if subtitle}
    <h2>{subtitle}</h2>

  {/if}

</div>

<style>
  h1 {
    text-transform: uppercase;
  }
  h2 {
    font-variant: small-caps;
  }

</style>