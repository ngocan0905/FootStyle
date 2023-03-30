<template>
  <div
    class="uppercase flex flex-row-reverse h-screen justify-center items-center m-[0,auto] w-[90%] md:w-full g-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"
  >
    <form
      action=""
      class="p-[0,10] w-full relative flex flex-col justify-center items-center"
    >
      <p class="">already have account ?</p>
      <router-link
        :to="{ name: 'Login' }"
        class="mb-8 font-semibold hover:text-gray-600 flex underline"
      >
        <ArrowLongLeftIcon class="w-6 h-4 mt-1 hidden md:flex" />login now
      </router-link>
      <h2
        class="text-4xl font-bold text-gray-600 shadow-gray-700 drop-shadow-xl"
      >
        register to footstyle
      </h2>
      <hr />
      <div class="my-4">
        <div class="flex">
          <input
            type="text"
            placeholder="User name"
            class="pl-10 rounded-lg leading-tight focus:bg-inherit focus:border-inherit py-2 text-gray-900 placeholder:text-gray-900"
            v-model="name"
          />
          <UserCircleIcon
            class="h-6 mt-1 md:h-8 w-6 md:w-8 text-gray-900 absolute ml-1"
          />
        </div>

        <div>
          <hr />
        </div>
        <div class="flex mt-4">
          <input
            type="email"
            placeholder="Example@gmail.com"
            class="pl-10 rounded-lg leading-tight focus:bg-inherit focus:border-inherit py-2 text-gray-900 placeholder:text-gray-900"
            v-model="email"
          />
          <EnvelopeIcon
            class="h-6 mt-1 md:h-8 w-6 md:w-8 text-gray-900 absolute ml-1"
          />
        </div>
        <div class="flex py-4">
          <input
            type="password"
            placeholder="********"
            class="pl-10 rounded-lg leading-tight focus:bg-inherit focus:border-inherit py-2 text-gray-900 placeholder:text-gray-900"
            v-model="password"
          />
          <LockClosedIcon
            class="h-6 md:h-8 mt-1 w-6 md:w-8 text-gray-900 absolute ml-1"
          />
        </div>
      </div>

      <Button
        @click.prevent=""
        class="drop-shadow-2xl uppercase bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white px-8 py-2 rounded-lg"
        >sign up</Button
      >
      <div class="angle"></div>
    </form>
    <div class="bg-transparent h-full w-full hidden md:flex"></div>
  </div>
</template>
<script setup>
import {
  ArrowLongLeftIcon,
  EnvelopeIcon,
  LockClosedIcon,
  MinusSmallIcon,
  UserCircleIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";
const name = ref(null);
const email = ref(null);
const password = ref(null);
</script>
