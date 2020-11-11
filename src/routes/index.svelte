<script>
  // import successkid from "images/successkid.jpg";
  import HeadTitle from "../components/UI/HeadTitle.svelte";
  // import Header from "../components/UI/HeadTitle.svelte";
  const idpict = "img/face_co.png";
</script>

<style>
  h1
   {
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
    max-width: 400px;
    margin: 0 0 1em 0;
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

<HeadTitle title="Accueil" />

<div>
	<!-- svelte-ignore a11y-img-redundant-alt -->
  <img
    class="banner w-full h-auto"
    src="img/bannière_métal_luisant.png"
    alt="bannière" />
  <div class="border rounded-b-lg lg:max-w-full md:w-11/12 md:mx-auto lg:flex">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
      class="w-auto rounded-b-lg hidden lg:block "
      src={idpict}
      alt="photo de l'auteur" />
    <div
      class="bg-white rounded-b p-4 flex flex-col justify-around leading-normal lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
      <div class="flex flex-col">
        <h1 class="my-0 text-left text-center lg:text-left">fabezio.org</h1>
        <h2 class="my-0 text-center lg:text-left">
          Développeur Web FrontEnd spécialisé JS
        </h2>
        <p class="mt-2 text-xl">Je code pour vous</p>
      </div>
    </div>
  </div>
  <div class="my-auto px-20">
    <h2 class="p-5 text-center">Bienvenue sur ce site!</h2>
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
          class="text-purple-600"
          href="https://github.com/Fabezio/fabezio_nuxt"
          target="_blank">ma page github</a>, afin de vous forger votre propre
        avis. N'hésitez pas à tester plus avant mes acquis, me faire un retour
        <a class="text-purple-600" href="mailto:fabezio@outlook.fr">par mail</a>
        et/ou émettre des suggestions (c'est grâce aux erreurs qu'on apprend et
        progresse).
      </p>
      <p>Sur ce, je vous souhaite une bonne visite!</p>
    </main>
  </div>
</div>
