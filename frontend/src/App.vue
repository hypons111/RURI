<template>
  <router-view class="view" />
  <nav class="nav">
    <router-link to="/"
      ><font-awesome-icon :icon="['fas', 'house']"
    /></router-link>
    <router-link to="/ingredient"
      ><font-awesome-icon :icon="['fas', 'jar']"
    /></router-link>
    <router-link to="/dessert"
      ><font-awesome-icon :icon="['fas', 'cheese']"
    /></router-link>
    <router-link to="/order"
      ><font-awesome-icon :icon="['fas', 'file-invoice-dollar']"
    /></router-link>
    <router-link to="/"
      ><font-awesome-icon :icon="['fas', 'plus']"
    /></router-link>
  </nav>
  <footer></footer>
</template>


<script setup>
import { computed, ref, onMounted, inject } from "vue";
import { useStore } from "vuex";
const store = useStore();

onMounted(async () => {
  store.dispatch("fetchAll");
});
</script>


<style lang="scss">
#app {
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #395b74;
}

.view {
  height: 90%;
  // border: 1px solid gold;
}

.nav {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  // border: 1px solid red;

  a {
    font-size: 2em;
    font-weight: bold;
    color: #e2c9ab;

    &.router-link-exact-active {
      color: #d5765a;
    }
  }
}
</style>
