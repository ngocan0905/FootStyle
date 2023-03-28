<template>
  <main>
    <div class="flex flex-col lg:flex-row px-2">
      <form class="flex flex-col border-black border-2 p-4 rounded-md">
        <div class="flex items-center w-fit">
          <div class="flex py-4 mr-1">
            <input
              type="email"
              placeholder="Searching..."
              class="pl-10 bg-transparent border-2 border-black rounded-lg leading-tight focus:bg-inherit focus:border-inherit py-2 text-black"
              v-model="email"
            />
            <MagnifyingGlassIcon
              class="h-6 md:h-8 w-6 md:w-8 text-black absolute ml-1 p-1"
            />
          </div>
          <Button>Apply</Button>
        </div>
        <h3 class="text-3xl font-semibold">Category</h3>
        <div class="grid grid-cols-4 lg:grid-cols-2">
          <CategoryCard :cate="cate" />
        </div>
        <h3 class="text-3xl font-semibold">Color</h3>
        <div class="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-3">
          <Button
            class="rounded-md border hover:bg-red-300 mt-1 mr-1 justify-center"
            >Red</Button
          >
          <Button class="rounded-md hover:bg-green-300 mt-1 mr-1 justify-center"
            >Green</Button
          >
          <Button
            class="rounded-md hover:bg-yellow-300 mt-1 mr-1 justify-center"
            >Yellow</Button
          >
          <Button class="rounded-md hover:bg-gray-300 mt-1 mr-1 justify-center"
            >Gray</Button
          >
          <Button class="rounded-md hover:bg-pink-300 mt-1 mr-1 justify-center"
            >Pink</Button
          >
          <Button
            class="rounded-md hover:bg-purple-300 mt-1 mr-1 justify-center"
            >Purple</Button
          >
          <Button class="rounded-md hover:bg-cyan-300 mt-1 mr-1 justify-center"
            >Cyan</Button
          >
          <Button class="rounded-md hover:bg-gray-700 mt-1 mr-1 justify-center"
            >Black</Button
          >
        </div>
      </form>

      <div
        class="flex flex-wrap gap-8 ml-0 lg:ml-8 w-fit justify-center border-2 border-black rounded-md my-4"
      >
        <Card :items="items"></Card>
      </div>
    </div>
  </main>
</template>
<script setup>
import CategoryCard from "@/components/CategoryCard.vue";
import Button from "../components/Button.vue";
import Card from "@/components/Card.vue";
import { products, category } from "@/fake-data";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
const items = products;
const cate = category;
</script>
