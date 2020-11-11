<div class="px-20" id="services">
  <h1 class="text-center mb-4 header-shadow">Services</h1>
  <div class="card-deck my-4">
    {#each services as service, i}
    <div class="card silver-shadow">
      <h2 class="card-header">{service.title}</h2>
      <div class="card-body">
        <p class="card-text text-justify">{service.paragraph}</p>
      </div>
    </div>
    {/each}
  </div>
  <div class="row my-5">
    <div class="col-md-10">
      <nuxt-link to="/contact">
        <button class="btn btn-info text-white mt-5 mx-auto">Oui, je demande une création/amélioration de site web</button>
      </nuxt-link>
    </div>
  </div>
</div>

<script>
  const services = [
    {
      id: 'create',
      title: 'Création',
      paragraph:
        "Besoin d'un site web? Vous êtes au bon endroit. Tout sera fait pour répondre à vos besoins.",
    },
    {
      id: 'adapt',
      title: 'Adaptation',
      paragraph:
        'Si votre site manque de réactivité ou est mal supporté par les navigateurs, alors il est urgent de le remettre au goût du jour.',
    },
    {
      id: 'optimize',
      title: 'Optimisation',
      paragraph:
        "Vous avez un site web mais il ne s'affiche pas correctement sur votre smartphone ou tablette? Rendez-le responsive! De cette façon, vous l'adapterez à tous les supports numériques, fixes ou mobiles, et même pour les écrans TV!",
    },
  ]
</script>