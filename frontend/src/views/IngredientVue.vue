<template>
  <div class="ingredient">
    <h1>INGREDIENT</h1>
    <button @click="getAllIngredients()">QUERY</button>
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
import API from "../assets/js/api";
import axios from "axios";

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
function getAllIngredients() {
  axios.get(API("getAllIngredients")).then((response) => {
    console.log(response);
  });
}
</script>

<style></style>
