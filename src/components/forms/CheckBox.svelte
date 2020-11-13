<div class="flex center-items my-3">
  <label class="text-justify" v-model="checkbox">
  <input class="mr-2" id="checkbox" on:click={() => dispatch("check")} type="checkbox"   />
    {iSwear}</label>
</div>

<script>
	import { createEventDispatcher } from 'svelte';
  export let iSwear ="Je certifie que les données ci-jointes sont exactes"
  const dispatch = createEventDispatcher();
</script>
