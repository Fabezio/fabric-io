<script>
  export let codes;
</script>

<style>
  img {
    max-width: 160px;
    max-height: 160px;
  }
  .frame {
    width: 160px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="mx-auto w-75">
  <!--ul.flex
  li.mr-6(v-for='(code, i) in codes', :key='i')
    a.text-blue-500(class='hover:text-blue-800', v-on='on' :href='`#${code.title}`') {code.title}
  
  -->

  {#each codes as code}
    <h3 class="mt-4">{code.title}</h3>
    {#each code.content as card}
      <div
        class="card my-3 {card.name === !code.title.name ? '&quot;hidden&quot;' : '&quot;block&quot;'}"
        id="code.title">
        <div class="d-flex">
          <div class="frame">
            <img class="block" rounded="rounded" src={card.img} alt="" />
          </div>
          <div class="flex-col w-full mx-3 pl-2">
            <h3>{card.name}</h3>
            <p class="font-light text-left">{card.desc}</p>
            <p class="text-muted version font-light text-gray-500 text-left">
              version:
              {card.version}
            </p>
          </div>
        </div>
      </div>
    {/each}
    <!-- </h2> -->
  {/each}
</div>
