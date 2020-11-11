<div class="sticky inset-x-0 top-0">
  <nav class="flex items-center justify-between flex-wrap py-1 px-3 bg-purple-600">
    <div class="flex items-center flex-shrink-0 text-gray-500 mr-6">
      <nuxt-link class="brand flex btn items-center" to="/"><img src="/img/favicon-32.png" />
        <div class="link text-2xl ml-1 font-semibold tracking-tight uppercase">fabezio</div>
      </nuxt-link>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" @click="navbarToggle" aria-target="#links"><span class="fas fa-bars"></span></button>
    </div>
    <div class="flex-col w-full flex-grow text-center block lg:flex-row lg:items-center lg:w-auto lg:flex lg:justify-start" id="links" :class="navCollapse ? &quot;block&quot; : &quot;hidden&quot;">
      <div v-for="(link, i) in navbarLinks" :key="i">
        <nuxt-link :to="link.route" :title="link.name" @click="!navbarToggle">
          <button class="btn block indigo inline-block lg:mt-0 hover:text-white hover:indigo"><span :class="link.icon"></span><span class="text-base link ml-2 uppercase">{{link.name }}</span></button>
        </nuxt-link>
      </div>
    </div>
    <!--.navbar-end(:class='navCollapse ? "block" : "hidden"' class='lg:flex-row lg:items-center lg:w-auto lg:flex lg:justify-start')
    .navbar-item.flex.flex-grow.justify-end
      Sign
      SettingsButton
      //div(v-for='(key, i) in logs', :key='i')
        //nuxt-link.nav-link.buttons(:to='key.route')
        button.block.btn.mx-1(v-show='key.visible' :class='key.color' @click='')
          span(:class='key.icon')
          //iconstack(:faclass='key.icon')
          span.ml-1.uppercase.route {{key.title}}
    -->
  </nav>
</div>

<script>
import { mapState } from 'vuex'
// import IconStack from '@/components/IconStack'
export default {
  name: 'Navbar',
  components: {
    // IconStack
  },
  data() {
    return {
      visible: false,
      navCollapse: false,
      dropdown: false,
      // signUser: true,
      // logUser: false,
      dropdownLinks: [],
    }
  },
  computed: {
    ...mapState({
      navbarLinks: (state) => state.links.navbarLinks,
      logs: (state) => state.logs.logs,
    }),
  },
  methods: {
    /*
    logButtonIsClicked() {
      this.logs.forEach((i) => {
        if (this.i !== 2) {
          this.i.visible = false
          this.i = 2
          this.i.visible = true
        }
      })
    },
    */
    navbarToggle() {
      this.navCollapse = !this.navCollapse
    },
    toggleSignUser() {
      this.signUser = !this.signUser
    },
    toggleLogUser() {
      this.logUser = !this.logUser
    },
    displayDropdown() {
      this.dropdown = !this.dropdown
    },

    userbtn() {},
    isActive() {
      this.links = 'active'
    },
    brandToHelp() {
      return this.$router.push('/help')
    },
  },
}
</script>
