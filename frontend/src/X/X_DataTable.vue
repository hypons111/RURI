<template>
  <div id="dataTable">
    <button class="btn" @click="show()">show</button>
    <table class="table">
      <thead>
        <tr>
          <th v-for="item in tableHeaderArray" :key="item">
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableDataArray" :key="item">
          {{
            item
          }}
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  tableHeaderArray: Array,
  tableDataArray: Array,
});
const tableHeaderArray = props.tableHeaderArray;
const tableDataArray = props.tableDataArray;

function show() {
  console.log(tableDataArray);
}
</script>

<style>
#dataTable {
  border: 1px solid red;
}
</style>
