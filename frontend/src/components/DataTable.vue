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
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  tableHeaderArray: Array
})
const tableHeaderArray = props.tableHeaderArray
</script>

<style>
#dataTable {
  border: 1px solid red;
}
</style>
