<script>
  export let item
</script>


<style>
  img {
    max-width: 400px;
    max-height: 300px;
  }
</style>

<div class=" col-lg-4 col-md-6 col-sm-12">
  <div class="card text-center m-3 p-0">
    <div class="card-header">
      <img class="card-top-img" src={item.banner} alt={item.alt} />
      <div class="card-body">
        <div class="card-text">{item.name}</div>
      </div>
    </div>
    <div class="card-footer p-0">
      <div class="btn-group btn-block">
        <!-- <button class="btn btn-outline-info "> -->
          <a class="btn btn-outline-info " href="portitem/{item.slug} "> détail </a>
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