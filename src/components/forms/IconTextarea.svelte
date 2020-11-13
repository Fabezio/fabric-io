<div class="my-4 flex items-center border rounded outlined"><span class="text-gray-800 mx-3" :class="prependIcon"></span>
  <textarea class="p-3" :class="width" :placeholder="label" :type="type" rows="2" ></textarea><span :class="appendIcon"></span>
</div>


<script>
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