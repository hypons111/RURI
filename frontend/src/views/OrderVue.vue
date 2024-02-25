<template>
  <div class="order">
    <h1>ORDER</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tableHeaderArray = ref([
  "#",
  "ITEMS",
  "TOTALCOST",
  "CREATEDATE",
  "SHIPPINGDATE",
  "REMARK",
  "OPTION",
]);
</script>

<style></style>
