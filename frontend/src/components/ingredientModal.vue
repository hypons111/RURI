<template>
  <div>
    <div class="mb-3">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="NAME" />
      </div>
      <div class="form-text" id="">ERROR</div>
    </div>

    <div class="mb-3">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="UNIT" />
      </div>
      <div class="form-text" id="">ERROR</div>
    </div>

    <div class="mb-3">
      <div class="input-group">
        <div v-if="isNewCategory" class="input-group">
          <input type="text" class="form-control" placeholder="CATEGORY" />
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="setIsNewCategory()"
          >
            <font-awesome-icon
              class="rotate_-90"
              :icon="['fas', 'arrow-turn-up']"
            />
          </button>
          <button class="btn btn-outline-secondary" type="button">
            <font-awesome-icon :icon="['fas', 'check']" />
          </button>
        </div>

        <div v-else class="input-group">
          <select class="form-select">
            <option value="1" selected>One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="setIsNewCategory()"
          >
            <font-awesome-icon :icon="['fas', 'plus']" />
          </button>
        </div>
      </div>
      <div class="form-text" id="">ERROR</div>
    </div>

    <div class="mb-3">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="STOCK" />
      </div>
      <div class="form-text" id="">ERROR</div>
    </div>

    <div class="mb-3">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="UNITCOST" />
      </div>
      <div class="form-text" id="">ERROR</div>
    </div>

    <div class="mb-3">
      <div class="input-group">
        <textarea class="form-control" placeholder="REMARK"></textarea>
      </div>
      <div class="form-text">ERROR</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isNewCategory = ref(false);
function setIsNewCategory() {
  isNewCategory.value = !isNewCategory.value;
}
</script>

<style scoped>
.rotate_-90 {
  transform: rotate(-90deg);
}
</style>