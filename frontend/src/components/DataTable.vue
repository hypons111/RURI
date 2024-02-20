<template>
  <div id="dataTable">
    <table class="table">
      <thead>
        <tr>
          <th v-for="item in tableHeaderArray" :key="item">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  tableHeaderArray: Array,
});
const tableHeaderArray = props.tableHeaderArray;
</script>

<style>
#dataTable {
  border: 1px solid red;
}
</style>
