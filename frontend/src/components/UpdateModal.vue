<template>
  <div id="modalContainer">
    <div
      class="modal fade"
      id="updateModal"
      tabindex="-1"
      aria-labelledby="createModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title fs-5" id="createModalLabel">
              <div class="input-group">
                <span class="input-group-text" id="">
                  <font-awesome-icon :icon="['fas', 'plus']" />
                </span>
                <select class="form-select" v-model="currentView">
                  <option value="Ingredient" selected>INGREDIENTT</option>
                  <option value="Dessert">DESSERT</option>
                  <option value="Order">ORDER</option>
                </select>
              </div>
            </div>
            <font-awesome-icon
              id="modalXMark"
              class="btn-sm"
              data-bs-dismiss="modal"
              :icon="['fas', 'xmark']"
            />
          </div>

          <!-- Ingredient -->
          <div v-if="currentView === 'Ingredient'" class="modal-body">
            <!-- Id -->
            <div class="mb-4">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="id"
                  v-model="currentData.id"
                  disabled
                />
              </div>
              <div id="" class="form-text errorText none">error</div>
            </div>

            <!-- Name -->
            <div class="mb-4">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="name"
                  v-model="currentData.name"
                />
              </div>
              <div id="" class="form-text errorText none">error</div>
            </div>

            <!-- Unit -->
            <div class="mb-4">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="unit"
                  v-model="currentData.unit"
                />
              </div>
              <div id="" class="form-text errorText none">error</div>
            </div>

            <!-- Category -->
            <!-- <div class="mb-4">
              <div class="input-group">
                <div v-if="isNewCategory" class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="category"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="isNewCategory = !isNewCategory"
                  >
                    <font-awesome-icon
                      class="rotate_-90"
                      :icon="['fas', 'arrow-turn-up']"
                    />
                  </button>
                </div>

                <div v-else class="input-group">
                  <select
                    class="form-select"
                    :class="{ isSolidColor: isSolidColor }"
                    @change="onChangeGategory"
                    v-model="currentData.category"
                  >
                    <option value="" selected disabled>category</option>
                    <option value="1">粥</option>
                    <option value="2">粉</option>
                    <option value="3">麵</option>
                    <option value="3">飯</option>
                  </select>
                  <button
                    class="btn btn-outline-secondary"
                    @click="isNewCategory = !isNewCategory"
                  >
                    <font-awesome-icon :icon="['fas', 'plus']" />
                  </button>
                </div>
              </div>
              <div id="" class="form-text errorText none">error</div>
            </div> -->

            <!-- Stock -->
            <div class="mb-4">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="stock"
                  v-model="currentData.stock"
                />
              </div>
              <div id="" class="form-text errorText none">error</div>
            </div>

            <!-- Unitcost -->
            <div class="mb-4">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="unitcost"
                  v-model="currentData.unitcost"
                />
              </div>
              <div id="" class="form-text errorText none">error</div>
            </div>

            <!-- Remark -->
            <div class="">
              <div class="input-group">
                <textarea
                  class="form-control"
                  placeholder="remark"
                  v-model="currentData.remark"
                ></textarea>
              </div>
              <div id="" class="form-text errorText none">error</div>
            </div>
          </div>
          <!-- Ingredient -->

          <!-- Dessert --><!-- Dessert -->

          <!-- Order --><!-- Order -->

          <div class="modal-footer">
            <font-awesome-icon
              data-bs-dismiss="modal"
              :icon="['fas', 'floppy-disk']"
              @click="updateHandler()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, inject, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const API = inject("API");

// modal 是 ingredient / dessert / order
const currentView = computed({
  // 改變 <select> 時，set 會被觸發更新 'SET_CURRENT_VIEW'
  set(value) {
    store.commit("SET_CURRENT_VIEW", value);
  },
  // 'SET_CURRENT_VIEW' 被更新後會被觸發 get 更新 currentView
  get() {
    return store.getters.CURRENT_VIEW;
  },
});

// modal 是 add / edit
const currentOption = computed(() => store.getters.CURRENT_OPTION);

// 如果 updateOption 是 add 就會是""
// 如果 updateOption 是 edit 就會帶入相關資料
// 如果新增資料 (currentData.id === "")，就用 `資料長度＋1` 做 id
const currentData = computed(() => {
  const data = store.getters.CURRENT_DATA;
  let target = "";
  switch (currentView.value) {
    case "Ingredient":
      target = "ALL_INGREDIENTS";
      break;
    case "":
      target = "ALL_DESSERTS";
      break;
    case "":
      target = "ALL_ORDERS";
      break;
  }
  const newId = (store.getters[target].length + 1).toString().padStart(3, "0");
  data.id = data.id || newId;
  return data;
});

// 是否要新增 ingredient category
const isNewCategory = ref(false);

// <select> 字體顏色
const isSolidColor = ref(false);

// 保持 <select> 字體顏色一致
function onChangeGategory(event) {
  isSolidColor.value = event.target.value === "0" ? false : true;
}

function updateHandler() {
  const url = currentOption.value + currentView.value;
  API.axiosPost(url, currentData.value).then((response) => {
    if (response.data[0]) {
      // 下面呢句要改成 ingredinet dessert order 通用嘅 URL
      // 或者可以直接 `store.dispatch("fetchAll")`;
      API.axiosGet("getAllIngredients").then((response) => {
        store.commit("SET_ALL_INGREDIENTS", response.data[1]);
        store.commit("SET_INGREDIENTS", response.data[1]);
      });
    } else {
      console.log(`[_id] : ${_id}`);
      console.log(response);
    }
  });
}

function addhandler(currentView) {
  switch (currentView) {
    case "ingredient":
      console.log(updateOption);
      addIngredient();
      break;
    case "dessert":
      addDessert();
      break;
    case "order":
      addOrder();
      break;
  }
}

function addIngredient() {
  console.log("addIngredient");
}

function addDessert() {
  console.log("addDessert");
}

function addOrder() {
  console.log("addOrder");
}

function editHandler(currentView) {
  console.log("editHandler");
  switch (currentView) {
    case "ingredient":
      editIngredient();
      break;
    case "dessert":
      editDessert();
      break;
    case "order":
      eidtOrder();
      break;
  }
}

function editIngredient() {
  console.log("editIngredient");
}
</script>