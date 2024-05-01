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
const searchBarArray = ref(["id", "name", "category", "remark"]);
const tableHeaderArray = ref([
  "#",
  "NAME",
  "UNIT",
  // "CATEGORY",
  "STOCK",
  "UNITCOST",
  "LABEL",
  "OPTION",
]);
</script>

<style></style>
