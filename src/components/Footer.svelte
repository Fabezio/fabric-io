<footer class="bg-purple-600 px-1 py-2 text-white inset-x-0 border-t border-purple-700">
  <nav class="flex items-center justify-evenly flex-wrap pb-3 px-3 pt-0">
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
    <h6 class="footertext pb-2" cols="12">
      <div class="center-text"><strong>fabezio.com</strong>
        &copy; {{ new Date().getFullYear() }}
        <i>- tous droits réservés</i>
      </div>
    </h6>
    <div class="flex"><a v-for="(link, index) in socialNetworks" :key="index" :href="link.url" target="_blank"><img class="w-6 ml-2" :src="link.logo" /></a></div>
  </nav>
</footer>

<script>
import { mapState } from 'vuex'
// import IconStack from '@/components/IconStack'
export default {
  name: 'Footer',
  components: {
    // IconStack
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      footerLinks: (state) => state.links.footerLinks,
      socialNetworks: (state) => state.social.socialNetworks,
    }),
  },
}
</script>
