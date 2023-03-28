<template>
  <header class="px-6 z-50 border-gray-200 shadow">
    <nav class="max-w-full flex items-center py-6 justify-center">
      <div class="flex items-center">
        <router-link class="text-5xl font-extrabold" :to="{ name: 'Products' }"
          >FootStyle</router-link
        >
      </div>
      <div
        class="text-2xl font-semibold hidden lg:flex relative justify-end items-center flex-1 py-4"
      >
        <router-link
          :to="{ name: 'Products' }"
          class="mx-3 px-3 font-medium hover:underline"
        >
          Products
        </router-link>
        <router-link
          :to="{ name: 'Contact' }"
          class="mx-3 px-3 font-medium hover:underline"
        >
          Contact</router-link
        >
        <router-link
          :to="{ name: 'About' }"
          class="mx-3 px-3 font-medium hover:underline"
        >
          About</router-link
        >
        <router-link
          :to="{ name: 'Login' }"
          class="mx-3 px-3 font-medium hover:underline"
        >
          Account</router-link
        >
      </div>
    </nav>

    <Bars3Icon
      class="cursor-pointer top-8 right-6 h-8 md:h-12 w-auto absolute lg:hidden"
      @click="mobileNav = !mobileNav"
    />
    <transition name="mobile-nav" class="z-[99]">
      <ul
        v-if="mobileNav"
        class="p-5 w-3/5 max-w-[250px] flex flex-col fixed h-full top-0 bg-slate-50 text-black left-0 text-2xl font-semibold shadow-2xl"
      >
        <router-link
          :to="{ name: 'Products' }"
          @click="mobileNav = !mobileNav"
          class="p-3 hover:translate-x-6"
        >
          Products</router-link
        >
        <hr />
        <router-link
          :to="{ name: 'Contact' }"
          @click="mobileNav = !mobileNav"
          class="p-3 hover:translate-x-6"
        >
          Contact</router-link
        >
        <hr />
        <router-link
          :to="{ name: 'About' }"
          @click="mobileNav = !mobileNav"
          class="p-3 hover:translate-x-6"
        >
          About</router-link
        >
        <hr />
        <router-link
          :to="{ name: 'Login' }"
          @click="mobileNav = !mobileNav"
          class="p-3 hover:translate-x-6"
        >
          Account</router-link
        >
      </ul>
    </transition>
  </header>
</template>
<script setup>
import { Bars3Icon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

const mobileNav = ref(false);
</script>
<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.6s ease-in-out;
}

.mobile-nav-enter-from {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
