<template>
  <nav>
    <router-link to="/">HOME</router-link> |
    <router-link to="/ingredient">INGREDIENT</router-link> |
    <router-link to="/dessert">DESSERT</router-link> |
    <router-link to="/order">ORDER</router-link>
  </nav>
  <router-view />
</template>

<script setup>
import { computed, ref, onMounted, inject } from "vue";
const API = inject("API");
const URL = inject("URL");
const INGREDINETS = ref([]);
const DESSERTS = ref([]);
const ORDERS = ref([]);

onMounted(async () => {
  API.axiosGet("ingredients").then((response) => {
    console.log(response.data);
  });
  API.axiosGet("desserts").then((response) => {
    console.log(response.data);
  });
  API.axiosGet("orders").then((response) => {
    console.log(response.data);
  });
});
</script>


<style lang="scss">
#app {
  height: 100vh;
  background-color: #395b74;
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #e2c9ab;

    &.router-link-exact-active {
      color: #d5765a;
    }
  }
}
</style>
