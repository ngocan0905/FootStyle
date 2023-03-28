<template>
  <navigation v-if="!navigation.value" />
  <main class=" ">
    <navbar v-if="!navbar.value && !navigation.value" />
    <router-view />
  </main>
  <Footer v-if="!navigation.value" />
</template>
<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Navigation from "./components/Navigation.vue";
import { reactive, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

const navigation = reactive({ value: null });
const navbar = reactive({ value: null });
const router = useRouter();

function checkRoute() {
  if (
    router.currentRoute.value.name === "Register" ||
    router.currentRoute.value.name === "Login" ||
    router.currentRoute.value.name === "ForgotPassword"
  ) {
    navigation.value = true;
    return;
  }
  navigation.value = false;
}
function checkRouteNavbar() {
  if (
    router.currentRoute.value.name === "Contact" ||
    router.currentRoute.value.name === "About"
  ) {
    navbar.value = true;
    return;
  }
  navbar.value = false;
}

onMounted(() => {
  checkRoute();
  checkRouteNavbar();
});

watch(router.currentRoute, () => {
  checkRoute();
  checkRouteNavbar();
});
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
