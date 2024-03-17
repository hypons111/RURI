<template>
  <div id="rootContainer">
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
      <router-link to="/">
        <font-awesome-icon
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          :icon="['fas', 'plus']"
        />
      </router-link>
    </nav>

    <footer></footer>

    <div id="modalContainer">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <font-awesome-icon
                data-bs-dismiss="modal"
                :icon="['fas', 'xmark']"
              />
              <font-awesome-icon :icon="['fas', 'check']" />
              <!-- <font-awesome-icon :icon="['fas', 'copy']" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
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
  height: 90%;
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

#rootContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
