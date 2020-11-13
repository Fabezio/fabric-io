<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

</script>

<!-- <button class="btn btn-info h-12"><span class="fas fa-paper-plane"></span> -->
<button
  class="btn btn-outline-success uppercase on:click={() => dispatch('sendmail')} font-bold"
  type="submit">envoyer
</button>
