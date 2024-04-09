<template>
  <div id="modalContainer">
    <div
      class="modal fade"
      id="createModal"
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
                <select class="form-select" v-model="currentComponent">
                  <option value="ingredient" selected>INGREDIENT</option>
                  <option value="dessert">DESSERT</option>
                  <option value="order">ORDER</option>
                </select>
              </div>
            </div>
            <font-awesome-icon
              class="btn-sm"
              data-bs-dismiss="modal"
              :icon="['fas', 'xmark']"
            />
          </div>
          <div class="modal-body">
            <div class="mb-4">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="name"
                  v-model="editData.name"
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
                  v-model="editData.unit"
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
                    v-model="editData.category"
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
            </div>

            <div class="mb-4">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="stock"
                  v-model="editData.stock"
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
                  v-model="editData.unitcost"
                />
              </div>
              <div id="" class="form-text errorText none">error</div>
            </div>

            <div class="">
              <div class="input-group">
                <textarea
                  class="form-control"
                  placeholder="remark"
                  v-model="editData.remark"
                ></textarea>
              </div>
              <div id="" class="form-text errorText none">error</div>
            </div>
          </div>

          <div class="modal-footer">
            <font-awesome-icon :icon="['fas', 'floppy-disk']" @click="add()" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
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
const isSolidColor = ref(false);
const isNewCategory = ref(false);

const props = defineProps({
  editData: Object,
});
const editData = props.editData;

function add() {
  console.log(editData);
  return;
  editData.id = (store.state.ALL_INGREDIENTS.length + 1)
    .toString()
    .padStart(3, "0");
  API.axiosPost("addIngredient", editData).then((response) => {
    console.log(response);
  });
}
</script>
