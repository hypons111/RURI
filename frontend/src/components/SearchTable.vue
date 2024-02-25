<template>
  <div>
    <div id="searchBar">
      <div class="row">
        <div class="col-sm-2" v-for="item in placeholderArray" :key="item">
          <input
            type="text"
            class="form-control"
            :placeholder="item"
            aria-label="Last name"
          />
        </div>
      </div>
    </div>
    <div id="dataTable">
      <table class="table">
        <thead>
          <tr>
            <th v-for="item in tableHeaderArray" :key="item">{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableDataArray" :key="item">
            <td v-for="data in item" :key="data">{{ data }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <button class="btn" @click="query()">API</button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, inject } from "vue";
const API = inject("API");
const URL = inject("URL");

onMounted(async () => {
  query();
});

const props = defineProps({
  pageName: String,
  tableHeaderArray: Array,
});

const tableHeaderArray = props.tableHeaderArray;
const tableDataArray = ref([]);
const placeholderArray = computed(() => {
  return props.tableHeaderArray.map((header) => header.toLowerCase());
});

async function query() {
  const response = await API.axiosGet(props.pageName);
  tableDataArray.value = response.data;
}
</script>

<style>
</style>