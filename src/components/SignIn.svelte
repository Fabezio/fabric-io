<div class="color h-full">
  <form @submit.prevent="">
    <div class="flex justify-center py-2">
      <input class="outlined border rounded w-3/12" type="text" placeholder="Identifiant" model="username" />
      <input class="outlined border rounded mx-2 w-3/12" type="password" placeholder="Mot de passe" model="password" />
      <input class="btn bg-red-300" type="submit" value="Envoyer" />
    </div>
  </form>
</div>
<script>
export default {
  data() {
    return {}
  },
}
</script>
