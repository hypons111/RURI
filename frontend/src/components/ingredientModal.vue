<template>
  <div>
    <div class="modal-body">
      <div class="mb-4">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="name" />
        </div>
        <div id="" class="form-text errorText none">error</div>
      </div>

      <div class="mb-4">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="unit" />
        </div>
        <div id="" class="form-text errorText none">error</div>
      </div>

      <div class="mb-4">
        <div class="input-group">
          <div v-if="isNewCategory" class="input-group">
            <input type="text" class="form-control" placeholder="category" />
            <button class="btn btn-outline-secondary" type="button" @click="isNewCategory = !isNewCategory">
              <font-awesome-icon class="rotate_-90" :icon="['fas', 'arrow-turn-up']" />
            </button>
          </div>

          <div v-else class="input-group">
            <select class="form-select" :class="{ isSolidColor: isSolidColor }" @change="onChangeGategory">
              <option value="0" selected disabled>category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button class="btn btn-outline-secondary" @click="isNewCategory = !isNewCategory">
              <font-awesome-icon :icon="['fas', 'plus']" />
            </button>
          </div>
        </div>
        <div id="" class="form-text errorText none">error</div>
      </div>

      <div class="mb-4">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="stock" />
        </div>
        <div id="" class="form-text errorText none">error</div>
      </div>

      <div class="mb-4">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="unitcost" />
        </div>
        <div id="" class="form-text errorText none">error</div>
      </div>

      <div class="">
        <div class="input-group">
          <textarea class="form-control" placeholder="remark"></textarea>
        </div>
        <div id="" class="form-text errorText none">error</div>
      </div>
    </div>

    <div class="modal-footer">
      <font-awesome-icon :icon="['fas', 'floppy-disk']" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isSolidColor = ref(false);
const isNewCategory = ref(false);
function onChangeGategory(event) {
  isSolidColor.value = event.target.value === "0" ? false : true;
}
</script>

<style scoped></style>