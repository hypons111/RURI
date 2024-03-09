<template>
  <div>
    <h1>{{ pageName }}</h1>
    <div id="searchBar">
      <div class="row">
        <div class="col-sm-2" v-for="item in searchBarArray" :key="item">
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
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, inject } from "vue";
import { useStore } from "vuex";

const API = inject("API");
const URL = inject("URL");
const store = useStore();

onMounted(async () => {});

const props = defineProps({
  pageName: String,
  searchBarArray: Array,
  tableHeaderArray: Array,
});

const pageName = props.pageName;
const tableHeaderArray = props.tableHeaderArray;
const tableDataArray = computed(() => store.state[pageName]);
</script>

<style>
</style>