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
const searchBarArray = ref(["id", "name", "inventory", "label"]);
const tableHeaderArray = ref([
  "#",
  "NAME",
  "INVENTORY",
  "INVENTORY VALUE",
  "PRICE PER UNIT",
  "UNIT",
  "LABEL",
  "OPTION",
]);
</script>

<style></style>
