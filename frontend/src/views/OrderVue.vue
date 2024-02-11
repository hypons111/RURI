<template>
  <div class="order">
    <h1>ORDER</h1>
    <DataTable :tableHeaderArray="tableHeaderArray"></DataTable>
  </div>
</template>

<script setup>
import DataTable from '@/components/DataTable.vue';
import { ref } from 'vue';

const tableHeaderArray = ref([
  "#",
  "ITEMS",
  "TOTALCOST",
  "CREATEDATE",
  "SHIPPINGDATE",
  "REMARK",
  "OPTION"
])
</script>

<style></style>
