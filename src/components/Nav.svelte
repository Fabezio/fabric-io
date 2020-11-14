<!-- <script context="module" >
  // function toggleNavbar (
    
    // ) {
      //   return open != open
      // }
      
    </script> -->

<script>
  // import { link } from "fs";
  import { navbarLinks } from "../store/links";
  import Clock from "./Clock.svelte";
  export let segment;
  // export let open
  let open = false;
  // export let toggleNavbar
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  /* [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  } */

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav class="navbar navbar-expand-lg navbar-dark bg-info shadow-lg sticky-top">
  <a class="navbar-brand" href=".">Fabric.io</a>
  <!-- <div>{open}</div> -->
  <button
    on:click={() => { open = !open}}
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" />
  </button>

  <div class="text-center navbar-collapse collapse {open ? 'show' : ''} " id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ">
      <!-- <li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Accueil</a></li> -->
      {#each navbarLinks as link}
        <li
          class="nav-item text-uppercase font-weight-light {segment === link.route || (segment == undefined && link.route == '') ? 'active' : ''}">
          {#if link.prefetch}
            <a
              class="nav-link "
              rel="prefetch"
              href={link.route}>{link.name}</a>
            <!-- </li> -->
          {:else}
            <!-- <li> -->
            <a class="nav-link  " href={link.route}>{link.name}</a>
          {/if}
        </li>
      {/each}
      <!-- <li>{segment}</li> -->

      
    </ul>
    
    <div>
      <div id="clock" class="collapse {open ? '' : 'show'}">
        <Clock />

      </div>

      <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
