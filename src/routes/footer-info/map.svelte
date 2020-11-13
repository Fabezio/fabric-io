<div>

  <HeadTitle title="Plan du site" subtitle="Pour garder le nord" />
  <div class="row">
    <div class="col">
      <dl>
        {#each navbarLinks as link}
        <dt><a href="{link.route}">{link.name}</a></dt>
        <dd>{link.desc}</dd>
        {/each}
      </dl>
      
    </div>
    <div class="col">
      <dl>
        {#each footerLinks as link}
        <dt><a href="footer-info/{link.route}">{link.name}</a></dt>
        <dd>{link.desc}</dd>
        {/each}
      </dl>

    </div>
  </div>

  
  <!-- <div v-for="(link,i) in navbarLinks" :key="i">
  </div> -->
  <!-- <div v-for="(link,i) in footerLinks" :key="i"> -->
    <!-- {#each footerLinks as link}
    <a href="footer-info/{link.route}">{link.name}</a>
    {/each} -->
  <!-- </div> -->
</div>

<script>
  import {navbarLinks, footerLinks} from '../../store/links'

  import HeadTitle from "../../components/UI/HeadTitle.svelte";
import About from '../about.svelte';
  </script>

  <style>
    dd {
      margin-left: 1.5rem;
    }
    a {
      text-transform: uppercase;
    }
  </style>

  