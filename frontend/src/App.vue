<template>
  <div id="rootContainer">
    <router-view class="view" />

    <nav id="nav">
      <router-link to="/"
        ><font-awesome-icon :icon="['fas', 'house']"
      /></router-link>
      <router-link to="/ingredient"
        ><font-awesome-icon :icon="['fas', 'cubes-stacked']"
      /></router-link>
      <router-link to="/dessert"
        ><font-awesome-icon :icon="['fas', 'cheese']"
      /></router-link>
      <router-link to="/order"
        ><font-awesome-icon :icon="['fas', 'file-invoice-dollar']"
      /></router-link>
      <router-link to="" id="showUpdateModalBotton">
        <font-awesome-icon
          data-bs-toggle="modal"
          data-bs-target="#createModal"
          :icon="['fas', 'plus']"
        />
      </router-link>
    </nav>
    <updateModal> </updateModal>
  </div>
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
  background-color: #395b74;
}

.view {
  height: calc(100% - 34px - 2em);
}

#nav {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em 0;

  a {
    font-size: 2em;
    font-weight: bold;
    color: #e2c9ab;

    &.router-link-exact-active {
      color: #d5765a;
    }
  }
}

#rootContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
