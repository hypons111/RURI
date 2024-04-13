<template>
  <div id="searchTable">
    <form
      id="searchBar"
      class="wrapper"
      :class="{ isHideSearchBar: isHideSearchBar }"
    >
      <div class="item searchInput" v-for="item in searchBarArray" :key="item">
        <input
          type="text"
          class="form-control"
          :placeholder="item"
          v-model.trim="queryData[item]"
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
              <td v-for="(value, key) in item" :key="value" :class="key">
                <label for="">{{ key.toUpperCase() }} : </label>
                <div class="tableValue">{{ value }}</div>
              </td>
              <td>
                <div class="tableValue">
                  <font-awesome-icon
                    data-bs-toggle="modal"
                    data-bs-target="#updateModal"
                    :icon="['fas', 'pen-to-square']"
                    @click="onclickUpdateModalButton(item)"
                  />
                  <font-awesome-icon
                    :icon="['fas', 'trash']"
                    @click="deleteIngredient(item._id, item.name)"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <UpdateModal :currentOption="currentOption"></UpdateModal>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, inject } from "vue";
import { useStore } from "vuex";
import UpdateModal from "@/components/UpdateModal.vue";
const API = inject("API");
const isHideSearchBar = ref(false);
const queryData = ref({});
const store = useStore();
const currentOption = computed(() => store.getters.CURRENT_OPTION);
const tableDataArray = computed(() => store.getters[pageName]);
const props = defineProps({
  pageName: String,
  searchBarArray: Array,
  tableHeaderArray: Array,
});
const pageName = props.pageName;
const tableHeaderArray = props.tableHeaderArray;
const updateData = ref({});

function onclickUpdateModalButton(item) {
  // 改變 modal 為修改
  store.commit("SET_CURRENT_OPTION", "edit");
  // 放入要修改的物件的資料到 CURRENT_DATA
  store.commit("SET_CURRENT_DATA", item);
}

function queryIngredients() {
  const requestData = {};
  for (const key in queryData.value) {
    if (queryData.value[key]) requestData[key] = queryData.value[key].trim();
  }
  API.axiosPost("queryIngredients", requestData).then((response) => {
    store.commit(`SET_${pageName}`, response.data[1]);
  });
}

function initial() {
  store.commit("SET_INGREDIENTS", store.getters[`ALL_${pageName}`]);
  for (const key in queryData.value) {
    queryData.value[key] = "";
  }
}

function deleteIngredient(_id, name) {
  const queryData = { _id };
  API.axiosPost("deleteIngredient", queryData).then((response) => {
    if (response.data[0]) {
      alert(`Deleted ${name}`);
      API.axiosGet("getAllIngredients").then((response) => {
        store.commit("SET_ALL_INGREDIENTS", response.data[1]);
        store.commit("SET_INGREDIENTS", response.data[1]);
      });
    } else {
      console.log(`[_id] : ${_id}`);
      console.log(response);
    }
  });
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
      margin-right: 1em;
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

    ._id {
      display: none;
    }

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