
<div class="my-4 mx-auto items-center">
  <!-- <input type={type} class="  border border-dark rounded-pill" id={name} this:bind={name} placeholder="{label}" cols="100"  required="required" /> -->
  <input type={type} class=" py-1 px-3 border border-dark rounded-pill" id={name} on:input={(event) => {name= event.target.value}} placeholder="{label}"   />
 <p class="text">{name}</p>
</div>

<script>
  export let label
  export let name
  export let type="text"
  // export let 
// export default {
//   props: {
//     width: {
//       type: String,
//       default: 'w-full',
//     },
//     label: {
//       type: String,
//       default: 'name',
//     },
//     type: {
//       type: String,
//       default: 'text',
//     },
//     prependIcon: {
//       type: String,
//       default: 'far fa-user',
//     },
//     appendIcon: {
//       type: String,
//       default: '',
//     },
//   },
// }
</script>