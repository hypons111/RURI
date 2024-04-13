import { createStore } from 'vuex'
import axios from 'axios';
import URL from "../X/X_url";

export default createStore({
  state: {
    ALL_INGREDIENTS: [],
    ALL_DESSERTS: [],
    ALL_ORDERS: [],
    INGREDIENTS: [],
    DESSERTS: [],
    ORDERS: [],
    CURRENT_VIEW: "Ingredient",
    CURRENT_OPTION: "add",
    CURRENT_DATA: {
      name: "",
      unit: "",
      category: "",
      stock: "",
      unitcost: "",
      remark: "",
      option: "",
    }
  },
  getters: {
    ALL_INGREDIENTS: state => state.ALL_INGREDIENTS,
    ALL_DESSERTS: state => state.ALL_DESSERTS,
    ALL_ORDERS: state => state.ALL_ORDERS,
    INGREDIENTS: state => state.INGREDIENTS,
    DESSERTS: state => state.DESSERTS,
    ORDERS: state => state.ORDERS,
    CURRENT_VIEW: state => state.CURRENT_VIEW,
    CURRENT_OPTION: state => state.CURRENT_OPTION,
    CURRENT_DATA: state => state.CURRENT_DATA
  },
  mutations: {
    SET_ALL_INGREDIENTS(state, payload) {
      state.ALL_INGREDIENTS = payload;
    },
    SET_ALL_DESSERTS(state, payload) {
      state.ALL_DESSERTS = payload;
    },
    SET_ALL_ORDERS(state, payload) {
      state.ALL_ORDERS = payload;
    },
    SET_INGREDIENTS(state, payload) {
      state.INGREDIENTS = payload;
    },
    SET_DESSERTS(state, payload) {
      state.DESSERTS = payload;
    },
    SET_ORDERS(state, payload) {
      state.ORDERS = payload;
    },
    SET_CURRENT_VIEW(state, payload) {
      state.CURRENT_VIEW = payload;
    },
    SET_CURRENT_OPTION(state, payload) {
      state.CURRENT_OPTION = payload;
    },
    SET_CURRENT_DATA(state, payload) {
      state.CURRENT_DATA = payload;
    }
  },
  actions: {
    async fetchIngredients({ commit }) {
      const response = await axios.get(URL.url("getAllIngredients"))
      const responseData = response.data;
      if (responseData[0]) {
        commit("SET_INGREDIENTS", response.data[1]);
        commit("SET_ALL_INGREDIENTS", response.data[1]);
      } else {
        console.log(response.data[1])
      }
    },
    async fetchDesserts({ commit }) {
      const reponse = await axios.get(URL.url("getAllDesserts"))
      commit("SET_DESSERTS", response.data[1]);
      commit("SET_ALL_DESSERTS", response.data[1]);
    },
    async fetchDesserts({ commit }) {
      const reponse = await axios.get(URL.url("getAllOrders"))
      commit("SET_ORDERS", response.data[1]);
      commit("SET_ALL_ORDERS", response.data[1]);
    },
    async fetchAll({ dispatch }) {
      await dispatch("fetchIngredients");
    }
  },
  modules: {}
})
