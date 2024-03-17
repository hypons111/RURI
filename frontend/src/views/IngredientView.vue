<template>
  <div class="ingredient">
    <SearchTable
      :pageName="pageName"
      :searchBarArray="searchBarArray"
      :tableHeaderArray="tableHeaderArray"
    ></SearchTable>
  </div>
</template>

<script setup>
import SearchTable from "@/components/SearchTable.vue";
import { ref, onMounted } from "vue";

const pageName = ref("INGREDIENTS");
const searchBarArray = ref(["#", "name", "category", "stock", "remark"]);
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
</script>

<style></style>
