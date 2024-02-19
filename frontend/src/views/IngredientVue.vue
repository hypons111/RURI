<template>
  <div class="ingredient">
    <h1>INGREDIENT</h1>
    <SearchBar
      :tableHeaderArray="tableHeaderArray"
      :getRequestData="getRequestData"
    ></SearchBar>
    <DataTable :tableHeaderArray="tableHeaderArray"></DataTable>
  </div>
</template>

<script setup>
import DataTable from "@/components/DataTable.vue";
import SearchBar from "@/components/SearchBar.vue";
import { ref } from "vue";

const tableHeaderArray = ref([
  "#",
  "NAME",
  "UNIT",
  "CATEGORY",
  "STOCK",
  "UNITCOST",
  "REMARK",
  "OPTION",
]);
const requestData = ref({});
function getRequestData(data) {
  requestData.value = data;
}
</script>

<style></style>
