<div>
  
  <h1 class="title text-center">Plan du site</h1>
  <h2 class="subtitle"><i>Pour garder le nord</i></h2>
  {#each navbarLinks as link}
  <a href="link.route">{link.name}</a>
  <!-- <div v-for="(link,i) in navbarLinks" :key="i">
  </div> -->
  {/each}
  <!-- <div v-for="(link,i) in footerLinks" :key="i"> -->
    {#each footerLinks as link}
    <a href="link.route">{link.name}</a>
    {/each}
  <!-- </div> -->
</div>

<script>
  import {navbarLinks, footerLinks} from '../../store/links'
</script>