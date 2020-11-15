<script>
  // import { link } from "fs";

  import { footerLinks } from "../../store/links";
  import { socialNetworks } from "../../store/social";
  export let bgColor = "bg-info";
  // import IconStack from '@/components/IconStack'
  // export default {
  //   name: 'Footer',
  //   components: {
  //     // IconStack
  //   },
  //   data() {
  //     return {}
  //   },
  //   computed: {
  //     ...mapState({
  //       footerLinks: (state) => state.links.footerLinks,
  //       socialNetworks: (state) => state.social.socialNetworks,
  //     }),
  //   },
  // }
</script>

<style>
  #margin {
    display: block;
    width: 100%;
    height: 10rem;
  }
</style>

<div id="margin" class="relative-bottom" />

<footer class="{bgColor} px-1 py-2 text-white inset-x-0 fixed-bottom mt-5">
  <div class="container">
    <div class="row">
      <div class="col">
        {#each footerLinks as link}
          <a class="d-block" href="footer-info/{link.route}">{link.name}</a>
        {/each}
      </div>
      <div class="col">
        <h6 class="footertext pb-2" cols="12">
          <div class="center-text">
            <a title="voir le code source?" href="https://github.com/Fabezio/fabric-io.git">
              <strong>fabric.io</strong>
            </a>
            &copy;
            {new Date().getFullYear()}
            <i>- tous droits réservés</i>
          </div>
        </h6>
        <div class="d-flex">
          {#each socialNetworks as link}
            <a class="mr-2" href={link.url} target="_blank">
              <img alt={link.name} width="24" height="24" src={link.logo} />
            </a>
          {/each}
        </div>
        <!-- <div class="mt-2">
          <a  href="https://github.com/Fabezio/fabric-io.git">source</a>

        </div> -->


      </div>
    </div>
  </div>
  <!-- <nav class="flex items-center justify-evenly flex-wrap pb-3 px-3 pt-0"> -->
  <!--.flex.items-center.flex-shrink-0.text-white.mr-6-->
  <!--div(v-for='(link, i) in footerLinks', :key='i')
    nuxt-link.route(class='xl:hidden' :to='link.route')
    button.indigo.btn
        span.mr-2(:class='link.icon')
        span.uppercase {{link.name }}
    
    -->
  <!--a.indigo(href='https://github.com/Fabezio/my-website_tailwind-utility', target='_blank')
    button.btn
      span.mr-2.fab.fa-github-alt
      span.uppercase mon code source
    
    -->
  <!--div.mx-3 |-->
  <!-- </nav> -->
</footer>
