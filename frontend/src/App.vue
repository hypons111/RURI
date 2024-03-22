<template>
  <div id="rootContainer">
    <router-view class="view" />

    <nav class="nav">
      <router-link to="/"><font-awesome-icon :icon="['fas', 'house']" /></router-link>
      <router-link to="/ingredient"><font-awesome-icon :icon="['fas', 'cubes-stacked']" /></router-link>
      <router-link to="/dessert"><font-awesome-icon :icon="['fas', 'cheese']" /></router-link>
      <router-link to="/order"><font-awesome-icon :icon="['fas', 'file-invoice-dollar']" /></router-link>
      <router-link to="/">
        <font-awesome-icon data-bs-toggle="modal" data-bs-target="#createModal" :icon="['fas', 'plus']" />
      </router-link>
    </nav>

    <footer></footer>

    <div id="modalContainer">
      <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            
            <div class="modal-header">
              <div class="modal-title fs-5" id="createModalLabel">
                <div class="input-group">
                  <span class="input-group-text" id="">
                    <font-awesome-icon :icon="['fas', 'plus']" />
                  </span>
                  <select class="form-select" v-model="currentComponent">
                    <option value="ingredient" selected>INGREDIENT</option>
                    <option value="dessert">DESSERT</option>
                    <option value="order">ORDER</option>
                  </select>
                </div>
              </div>
              <font-awesome-icon class="btn-sm" data-bs-dismiss="modal" :icon="['fas', 'xmark']" />
            </div>

            <!-- <div class="modal-body"> -->
              <component :is="switchComponent"></component>
            <!-- </div> -->
            
            <!-- <div class="modal-footer">
              <font-awesome-icon :icon="['fas', 'check']" />
            </div> -->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed, ref, onMounted, inject } from "vue";
import { useStore } from "vuex";
import ingredientModal from "./components/ingredientModal.vue";
const store = useStore();
const currentComponent = ref("ingredient");
const switchComponent = computed(() => {
  switch (currentComponent.value) {
    case "ingredient":
      return ingredientModal;
    case "dessert":
    case "order":
      alert("未有");
  }
});

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
