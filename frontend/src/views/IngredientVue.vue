<template>
  <div class="ingredient">
    <h1>INGREDIENT</h1>
    <SearchTable
      :tableHeaderArray="tableHeaderArray"
      :pageName="pageName"
    ></SearchTable>
  </div>
</template>

<script setup>
import SearchTable from "@/components/SearchTable.vue";
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
const pageName = ref("ingredients");
</script>

<style></style>
