<template>
  <div id="searchBar">
    <div class="row">
      <div class="col-sm-2" v-for="item in placeholderArray" :key="item">
        <input type="text" class="form-control" :placeholder=item aria-label="Last name">
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  tableHeaderArray: Array
})
const tableHeaderArray = props.tableHeaderArray
const placeholderArray = computed(() => {
  return props.tableHeaderArray.map(header => header.toLowerCase())
})
</script>

<style>
#searchBar {
  border: 1px solid green;
}
</style>