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
  export let portfolio;
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

<style>
  img {
    max-width: 400px;
    max-height: 300px;
  }
</style>

<div>
  <HeadTitle title="Portfolio" />
  <!-- <h1 class="text-center mb-4">Portfolio</h1> -->
  <h2 class="text-center mb-3">Sites créés en formation:</h2>
  <!-- <div class="flex mb-4 flex-wrap justify-center"> -->
  <div class="row">
    {#each portfolio as folio}
      <div class=" col-lg-4 col-md-6 col-sm-12">
        <div class="card text-center m-3 p-0">
          <div class="card-header">
            <img class="card-top-img" src={folio.banner} alt={folio.alt} />
            <div class="card-body">
              <div class="card-text">{folio.name}</div>
            </div>
          </div>
          <div class="card-footer p-0">
            <div class="btn-group btn-block">
              <!-- <button class="btn btn-outline-info "> -->
                <a class="btn btn-outline-info " href="portfolio/{folio.slug} "> détail </a>
              <!-- </button> -->
              <!-- <button class="btn btn-info"> -->
                <a
                class="btn btn-info" href="https://{folio.url}"
                  target="_blank">visiter</a>
                <!-- </button> -->
            </div>
            <!--             
          </div> -->
          </div>
        </div>
      </div>
    {/each}
  </div>
  <!-- </div> -->
</div>
