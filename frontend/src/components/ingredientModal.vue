<template>
  <div>
    <div class="modal-body">
      <div class="mb-4">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="name"
            v-model="requestData.name"
          />
        </div>
        <div id="" class="form-text errorText none">error</div>
      </div>

      <div class="mb-4">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="unit"
            v-model="requestData.unit"
          />
        </div>
        <div id="" class="form-text errorText none">error</div>
      </div>

      <div class="mb-4">
        <div class="input-group">
          <div v-if="isNewCategory" class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="category"
              v-model="requestData.category"
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
              v-model="requestData.category"
            >
              <option value="0" selected disabled>category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
      </div>

      <div class="mb-4">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="stock"
            v-model="requestData.stock"
          />
        </div>
        <div id="" class="form-text errorText none">error</div>
      </div>

      <div class="mb-4">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="unitcost"
            v-model="requestData.unitcost"
          />
        </div>
        <div id="" class="form-text errorText none">error</div>
      </div>

      <div class="">
        <div class="input-group">
          <textarea
            class="form-control"
            placeholder="remark"
            v-model="requestData.remark"
          ></textarea>
        </div>
        <div id="" class="form-text errorText none">error</div>
      </div>
    </div>

    <div class="modal-footer">
      <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="add()" />
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const API = inject("API");
const URL = inject("URL");
const isSolidColor = ref(false);
const isNewCategory = ref(false);
const requestData = {
  name: "",
  unit: "",
  category: "0",
  stock: "",
  unitcost: "",
  remark: "",
  option: "",
};
function onChangeGategory(event) {
  isSolidColor.value = event.target.value === "0" ? false : true;
}
function add() {
  requestData.id = (store.state.ALL_INGREDIENTS.length + 1)
    .toString()
    .padStart(3, "0");
  API.axiosPost("addIngredient", requestData).then((response) => {
    console.log(response);
  });
}
</script>

<style scoped></style>