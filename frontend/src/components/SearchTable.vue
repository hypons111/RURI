<template>
  <div id="searchTable">
    <form
      id="searchBar"
      class="wrapper"
      :class="{ isHideSearchBar: isHideSearchBar }"
    >
      <div class="item searchInput" v-for="item in searchBarArray" :key="item">
        <label class="sr-only" for="inlineFormInput">{{ item }}</label>
        <input
          type="text"
          class="form-control"
          :placeholder="item"
          v-model="queryData[item]"
        />
      </div>
      <div id="bottonGroup" class="item">
        <button id="clearButton" type="button" class="btn" @click="initial()">
          CLEAR
        </button>
        <button
          id="searchButton"
          type="button"
          class="btn"
          @click="queryIngredients()"
        >
          SEARCH
        </button>
      </div>

      <button
        id="searchBarSwitch"
        type="button"
        class="btn"
        @click="isHideSearchBar = !isHideSearchBar"
      >
        <font-awesome-icon :icon="['fas', 'up-down']" />
      </button>
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
const isHideSearchBar = ref(false);
const queryData = ref({
  id: "",
  name: "",
  category: "",
});

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

function queryIngredients() {
  const requestData = {};
  for (const key in queryData.value) {
    if (queryData.value[key]) requestData[key] = queryData.value[key];
  }
  API.axiosPost("queryIngredients", requestData).then((response) => {
    store.commit("SET_INGREDIENTS", response.data);
  });
}

function initial() {
  store.commit("SET_INGREDIENTS", store.state[`ALL_${pageName}`]);
  for (const key in queryData.value) {
    queryData.value[key] = "";
  }
}
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
  gap: 1em 2em;
  padding: 1em;

  .item {
    padding: 0;
  }

  #bottonGroup {
    display: flex;
    justify-content: right;

    & button {
      flex-grow: 1;
    }

    #clearButton,
    #searchButton {
      margin-right: 0.5em;
      color: var(--RURI-1);
      background-color: var(--RURI-4);
    }

    & button:last-child {
      margin-right: 0 !important;
    }
  }

  #searchBarSwitch {
    display: none;
    color: var(--RURI-4);
  }

  input,
  select,
  textarea {
    // border: 1px solid red;
    color: var(--RURI-1);
    color: rgba(57, 91, 116, 1);
    padding-top: 4px;
  }

  & .form-select,
  & input::placeholder,
  & textarea::placeholder {
    color: rgba(57, 91, 116, 0.5);
    /* var(--RURI-1); */
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
  #searchBar {
    #bottonGroup {
      display: flex;
      justify-content: space-between;
    }
  }

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
    }

    .tableValue {
      width: 50%;
      text-align: right;

      svg:last-child {
        margin-left: 0.5em;
      }
    }
  }

  @media (max-width: 464px) {
    #searchBar {
      #bottonGroup {
        display: flex;
        justify-content: space-between;
      }

      #searchBarSwitch {
        display: block;
        color: var(--RURI-4);
      }

      // 隱藏 Search Bar
      &.isHideSearchBar {
        padding: 0 1em;

        #bottonGroup,
        .searchInput {
          display: none;
        }
      }
    }
  }
}
</style>