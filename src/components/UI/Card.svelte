<script>
  export let item;
</script>

<style>
  img {
    max-width: 320px;
    max-height: 240px;
  }

  .frame {
    width: 320px;
    height: 240px;
    /* width: 160px;
    height: 160px; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    width: 320px;
  }
</style>

<div class=" col-lg-4 col-md-12 col-sm-12 text-center">
  <div class="card mx-auto m-3 ">
    <div class="card-header p-0 m-0">
      <div class="frame">
        <img class="card-top-img py-1 px-2 rounded-lg" src={item.banner} alt={item.alt} />
      </div>
      <div class="card-body">
        <div class="card-text">{item.name}</div>
      </div>
    </div>
    <div class="card-footer p-0">
      <div class="btn-group btn-block">
        <!-- <button class="btn btn-outline-info "> -->
        <a class="btn btn-outline-info " href="portfolio/{item.slug} ">
          détail
        </a>
        <!-- </button> -->
        <!-- <button class="btn btn-info"> -->
        <a
          class="btn btn-info"
          href="https://{item.url}"
          target="_blank">visiter</a>
        <!-- </button> -->
      </div>
      <!--             
    </div> -->
    </div>
  </div>
</div>
