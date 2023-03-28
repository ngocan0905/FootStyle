<script setup>
const prosp = defineProps({
  cate: {
    type: String,
  },
});
</script>
<template>
  <div
    v-for="(item, index) in cate"
    :key="index"
    class="border border-black overflow-hidden m-1 rounded-md"
  >
    <img
      :src="item.imageUrl"
      alt=""
      class="object-cover w-full hover:scale-105"
    />
    <div class="text-sm text-center font-semibold">
      {{ item.name }}
    </div>
  </div>
</template>
