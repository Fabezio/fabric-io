<script context="module">
  export function preload() {
    return this.fetch(`portfolio.json`)
      .then((r) => r.json())
      .then((portfolio) => {
        console.log(portfolio);
        return { portfolio };
      });
  }
</script>

<script>
  import HeadTitle from "../../components/UI/HeadTitle.svelte";
  import Card from "../../components/UI/Card.svelte";
  export let portfolio;
  const max = 3;
  // const portfolio = [
  //   {
  //     id: "1",
  //     url: "travelagency-mod.netlify.app",
  //     img: "https://travelagencyfabezio.netlify.app/Images/view.png",
  //     banner: "https://travelagencyfabezio.netlify.app/Images/view.png",
  //     mod: "voyage",
  //     alt: "travel agency",
  //     name: "Travel Agency",
  //     desc: "Premier site en HTML / CSS",
  //   },
  //   {
  //     id: "2",
  //     url: "snakeey.netlify.app",
  //     img: "https://snakeey.netlify.app/img/view.png",
  //     banner: "https://snakeey.netlify.app/img/view.png",
  //     mod: "snakeey",
  //     alt: "snakeey",
  //     name: "Snakeey",
  //     desc: "Version JS de Snake",
  //   },
  //   {
  //     id: "3",
  //     url: "topactrices.netlify.app",
  //     img: "https://topactrices.netlify.app/img/color-image.jpg",
  //     banner: "https://topactrices.netlify.app/img/color-image.jpg",
  //     alt: "top 5 actrices",
  //     mod: "actrices",
  //     name: "Top 5 Actrices",
  //     desc: "Site en jQuery",
  //   },
  //   {
  //     id: "4",
  //     url: "do-pe.netlify.app",
  //     img: "https://do-pe.netlify.app/img/banner.jpg",
  //     banner: "https://do-pe.netlify.app/img/banner.jpg",
  //     alt: "do-pe",
  //     mod: "dope",
  //     name: "Do-Pe",
  //     desc: "Site en VueJS 2",
  //   },
  // ];
</script>


<!-- <div> -->
<HeadTitle title="Portfolio" />
<!-- {#if portfolio} -->
<!-- <h1 class="text-center mb-4">Portfolio</h1> -->
<!-- {#for i in portfolio} -->
<h2 class="text-center mb-3">Sites réalisés:</h2>
<div class="row">
{#each portfolio as folio, i}
    {#if folio.mode=="self"}
      <Card item={folio} />
      {/if}
      {/each}
    </div>

<!-- <h2 class="text-center mb-3">Sites réalisés:</h2> -->
<h2 class="text-center mb-3">Sites créés en formation:</h2>
<div class="row">
{#each portfolio as folio, i}
{#if folio.mode === "tuto"}
      <Card item={folio} />
      {/if}
      {/each}
    </div>
<!-- {:else} -->
<!-- <div class="row">
  <Card item={folio} />
</div> -->
<!-- {/each} -->

<!-- <div class="flex mb-4 flex-wrap justify-center"> -->
<!-- <div class="row"> -->

<!-- {#each portfolio as folio} -->
<!-- <Card item={folio} /> -->
<!-- {/for} -->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
