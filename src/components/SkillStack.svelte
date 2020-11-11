<script>
  export let codes;
</script>

<div class="mx-auto w-75">
  <!--ul.flex
  li.mr-6(v-for='(code, i) in codes', :key='i')
    a.text-blue-500(class='hover:text-blue-800', v-on='on' :href='`#${code.title}`') {code.title}
  
  -->

  {#each codes as code}
    <h2 class="font-light">{code.title}</h2>
    {#each code.content as card}
      <div
        class="main border rounded m-3 flex flex-col flex-grow {card.name === !code.title.name ? '&quot;hidden&quot;' : '&quot;block&quot;'}"
        id="code.title">
        <div class="flex">
          <div class="thumbnail">
            <img class="block" rounded="rounded" src="card.img" alt="" />
          </div>
          <div class="flex-col w-full mx-3 pl-2">
            <h3>{card.name}</h3>
            <p class="font-light text-left">{card.desc}</p>
            <p class="version font-light text-gray-500 text-left">
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
