<template>
  <div class="dessert">
    <h1>DESSERT</h1>
    <DataTable :tableHeaderArray="tableHeaderArray"></DataTable>
  </div>
</template>

<script setup>
import DataTable from '@/components/DataTable.vue';
import { ref } from 'vue';

const tableHeaderArray = ref([
  "#",
  "NAME",
  "INGREDIENTS",
  "COST",
  "REMARK",
  "OPTION"
])
</script>

<style></style>
