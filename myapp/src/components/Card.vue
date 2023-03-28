<template>
  <div
    v-for="item in items"
    :key="item.id"
    class="border-2 border-gray-700 hover:shadow-2xl bg-white flex flex-col justify-center items-center rounded-lg overflow-hidden my-4"
  >
    <img
      :src="item.imageUrl"
      alt=""
      class="object-cover w-full hover:scale-105"
    />
    <div class="text-2xl text-center">
      {{ item.name }}
    </div>
    <div>
      {{ item.averageRating }}
    </div>
    <div>${{ item.price }}</div>
    <router-link :to="{ path: `/products/${item.id}` }"
      ><Button class="bg-gray-400 active:bg-gray-700 p-2 mb-4 rounded-lg">
        Views detail
      </Button></router-link
    >
  </div>
</template>
<script setup>
import Button from "./Button.vue";
const { props } = defineProps({
  items: {
    type: Object,
  },
});
</script>
