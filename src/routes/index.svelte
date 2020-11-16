<script>
  // import successkid from "images/successkid.jpg";
  import HeadTitle from "../components/UI/HeadTitle.svelte";
  // import Header from "../components/UI/HeadTitle.svelte";
  const idpict = "images/face_co.png";
  const logo = "images/fabric-io.png";
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  /* figure {
    text-align: center;
    margin: 0 auto;
    margin: 0 0 1em 0;
  } */

  img {
    width: 100%;
    /* margin: 0 0 1em 0; */
  }
  #logo {
    max-width: 300px;
    max-height: 300px;
    /* max-width: 200px;
    max-height: 200px; */
  }

  /* p {
		margin: 1em auto;
	} */

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<!-- <img
  
  
  src="img/banner.png"
  alt="bannière" > -->

<div>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="border  d-flex">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      id="logo"
      class="w-auto rounded-lg rounded-bl   "
      src={logo}
      alt="Logo du site" />
    <!-- <img
      id="logo"
      class="w-auto rounded-lg rounded-bl   "
      src={idpict}
      alt="photo de l'auteur" /> -->
    <div
      class="bg-white rounded-b p-4 flex flex-col justify-around leading-normal lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
      <div class="flex flex-col">
        <h1 class="my-0 text-left ">fabric-io</h1>
        <h2 class="my-0 text-left ">Développement Web</h2>
        <p class="mt-2 ">On code pour vous</p>
      </div>
    </div>
  </div>
  <div class="my-auto px-20">
    <HeadTitle title="Accueil" subtitle="Bienvenue sur ce site!" />
    <!-- <h2 class="p-5 text-center">Bienvenue sur ce site!</h2> -->
    <main class="mx-2 lg:mx-0">
      <p>
        Si vous êtes ici, c'est que vous avez besoin d'un développeur web, en
        freelance ou contrat interne. J'ai envie de vous dire que vous êtes au
        bon endroit; néanmoins vous émettez certainement des réserves et avez
        besoin de preuves de mes compétences. C'est pourquoi tout est décrit
        ici.
      </p>
      <p>
        Je vous invite donc à prendre le temps de visiter ce site et consulter
        <a
          class=""
          href="https://github.com/Fabezio/fabric-io"
          target="_blank">ma page github</a>, afin de vous forger votre propre
        avis. N'hésitez pas à tester plus avant mes acquis, me faire un retour
        <a class="" href="mailto:fabezio@outlook.fr">par mail</a>
        et/ou émettre des suggestions (c'est également grâce aux erreurs qu'on
        apprend et progresse).
      </p>
      <p>Sur ce, je vous souhaite une bonne visite!</p>
    </main>
  </div>
</div>
