<script>
  export let item
</script>


<style>
  img {
    max-width: 300px;
    max-height: 240px;
  }
  .card {
    width: 340px ;
  }
</style>

<div class=" col-lg-4 col-md-12 col-sm-12 text-center">
  <div class="card  m-3 py-0 ">
    <div class="card-header px-auto">
      <img class="card-top-img rounded-lg" src={item.banner} alt={item.alt} />
      <div class="card-body">
        <div class="card-text">{item.name}</div>
      </div>
    </div>
    <div class="card-footer p-0">
      <div class="btn-group btn-block">
        <!-- <button class="btn btn-outline-info "> -->
          <a class="btn btn-outline-info " href="portfolio/{item.slug} "> détail </a>
        <!-- </button> -->
        <!-- <button class="btn btn-info"> -->
          <a
          class="btn btn-info" href="https://{item.url}"
            target="_blank">visiter</a>
          <!-- </button> -->
      </div>
      <!--             
    </div> -->
    </div>
  </div>
</div>