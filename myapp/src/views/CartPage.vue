<template>
  <div class="w-full h-auto px-16">
    <h1 class="text-5xl py-4 text-center">Shopping cart</h1>
    <div class="font-semibold">
      <div
        v-for="product in cartItems"
        :key="product.id"
        class="flex items-center px-16 border-t-gray-700 border border-x-0 last:border-b-gray-700 overflow-hidden justify-around"
      >
        <img :src="product.imageUrl" alt="" class="hover:scale-105 mr-3" />
        <div>
          <div class="text-2xl">{{ product.name }}</div>
          <div>${{ product.price }}</div>
          <div>CreateAt : 28/March/2022</div>
        </div>
        <div>Size: 40</div>
        <div class="flex">
          Quanlity:<MinusCircleIcon class="ml-1 w-6 h-6" />
          <input
            type="number"
            class="border w-8 text-center mx-1"
            value="1"
          /><PlusCircleIcon class="w-6 h-6" />
        </div>
        <div class="ml-10"><Button>Remove </Button></div>
      </div>
    </div>
    <div class="flex flex-col items-center py-3">
      <h3 class="text-center text-3xl py-2">Total : ${{ totalPrice }}</h3>
      <Button class="max-w-[350px]">Proceed to checkout</Button>
    </div>
  </div>
</template>
<script setup>
import { cartItems } from "@/fake-data";
import { computed } from "vue";
import Button from "@/components/Button.vue";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/vue/24/outline";

const products = cartItems;
const totalPrice = computed(() =>
  products.reduce((s, product) => s + Number(product.price), 0)
);
</script>
