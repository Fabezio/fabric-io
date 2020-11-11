<script>
// import { domain } from "process";


  export let title
  export let subtitle = ""
  const name = "fabric.io"

</script>

<svelte:head>
  <title>{name} | {title} </title>
</svelte:head>
<div class="text-center">
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