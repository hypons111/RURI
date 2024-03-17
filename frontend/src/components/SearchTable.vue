<template>
  <div id="searchTable">
    <form id="searchBar" class="wrapper">
      <div class="row" v-for="item in searchBarArray" :key="item">
        <div class="item">
          <label class="sr-only" for="inlineFormInput">{{ item }}</label>
          <input
            type="text"
            class="form-control"
            :placeholder="item"
            :aria-label="item"
          />
        </div>
      </div>
    </form>

    <div id="dataTable" class="wrapper">
      <div id="theadWrapper">
        <table class="table">
          <thead>
            <tr>
              <th v-for="item in tableHeaderArray" :key="item">{{ item }}</th>
            </tr>
          </thead>
        </table>
      </div>

      <div id="tbodyWrapper">
        <table class="table table-striped">
          <tbody>
            <tr v-for="item in tableDataArray" :key="item">
              <td v-for="(value, key) in item" :key="value">
                <label for="">{{ key.toUpperCase() }} : </label>
                <div class="tableValue">{{ value }}</div>
              </td>
              <td>
                <label for="">Option : </label>
                <div class="tableValue">
                  <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, inject } from "vue";
import { useStore } from "vuex";

const API = inject("API");
const URL = inject("URL");
const store = useStore();

onMounted(async () => {
  console.log(tableDataArray.value);
});

const props = defineProps({
  pageName: String,
  searchBarArray: Array,
  tableHeaderArray: Array,
});

const pageName = props.pageName;
const tableHeaderArray = props.tableHeaderArray;
const tableDataArray = computed(() => store.state[pageName]);
</script>

<style scoped lang="scss">
#searchTable {
  display: flex;
  flex-direction: column;
  height: 100%;
  > * {
    width: 100%;
  }
}

#searchBar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1em;
  padding: 1em;
  background-color: var(--RURI-4);
  .row {
    margin: 0;
  }
}

#dataTable {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  table {
    table-layout: fixed;
    margin: 0;
  }
  #theadWrapper {
    background-color: white;
    padding-right: 1em;
  }

  #tbodyWrapper {
    height: 100%;
    overflow-y: auto;

    label {
      display: none;
    }

    .tableValue {
      svg:last-child {
        margin-left: 0.5em;
      }
    }
  }
}

@media (max-width: 767.98px) {
  #theadWrapper {
    display: none;
  }

  #tbodyWrapper td {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5em 1em;
    border: none;

    label {
      width: 50%;
      display: inline !important;
      text-align: left;
      // border: 1px solid red;
    }

    .tableValue {
      width: 50%;
      text-align: right;
      // border: 1px solid red;

      svg:last-child {
        margin-left: 0.5em;
      }
    }
  }
}
</style>