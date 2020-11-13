<script>
  import HeadTitle from "../components/UI/HeadTitle.svelte";
  const services = [
    {
      id: "create",
      title: "Création",
      paragraph:
        "Besoin d'un site web? Vous êtes au bon endroit. Tout sera fait pour répondre à vos besoins.",
    },
    {
      id: "adapt",
      title: "Adaptation",
      paragraph:
        "Si votre site manque de réactivité ou est mal supporté par les navigateurs, alors il est urgent de le remettre au goût du jour.",
    },
    {
      id: "optimize",
      title: "Optimisation",
      paragraph:
        "Vous avez un site web mais il ne s'affiche pas correctement sur votre smartphone ou tablette? Rendez-le responsive! De cette façon, vous l'adapterez à tous les supports numériques, fixes ou mobiles, et même pour les écrans TV!",
    },
  ];
</script>

<div class="px-20" id="services">
  <HeadTitle title="Services" />
  <!-- <h1 class="text-center mb-4 header-shadow">Services</h1> -->
  <div class="card-deck my-4">
    {#each services as service, i}
      <div class="card silver-shadow border border-info shadow-lg">
        <h2 class="card-header bg-info text-light">{service.title}</h2>
        <div class="card-body">
          <p class="card-text text-justify">{service.paragraph}</p>
        </div>
      </div>
    {/each}
  </div>
  <div class="shadow-lg">
    <a class="btn btn-info text-light mt-5 btn-block" href="contact">
      Oui, je demande une création/amélioration de site web
    </a>

  </div>
  <!-- <div class="row my-5">
    <div class="col-md-10">
    </div>
  </div> -->
</div>
