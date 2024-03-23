import { createStore } from 'vuex'
import axios from 'axios';
import URL from "../assets/js/url";

export default createStore({
  state: {
    ALL_INGREDIENTS: [],
    ALL_DESSERTS: [],
    ALL_ORDERS: [],
    INGREDIENTS: [],
    DESSERTS: [],
    ORDERS: []
  },
  getters: {
    ALL_INGREDIENTS: state => state.ALL_INGREDIENTS,
    ALL_DESSERTS: state => state.ALL_DESSERTS,
    ALL_ORDERS: state => state.ALL_ORDERS,
    INGREDIENTS: state => state.INGREDIENTS,
    DESSERTS: state => state.DESSERTS,
    ORDERS: state => state.ORDERS
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
    }
  },
  actions: {
    async fetchIngredients({ commit }) {
      const response = await axios.get(URL.url("getAllIngredients"))
      commit("SET_INGREDIENTS", response.data);
      commit("SET_ALL_INGREDIENTS", response.data);
    },
    async fetchDesserts({ commit }) {
      const reponse = await axios.get(URL.url("getAllDesserts"))
      commit("SET_DESSERTS", response.data);
      commit("SET_ALL_DESSERTS", response.data);
    },
    async fetchDesserts({ commit }) {
      const reponse = await axios.get(URL.url("getAllOrders"))
      commit("SET_ORDERS", response.data);
      commit("SET_ALL_ORDERS", response.data);
    },
    async fetchAll({ dispatch }) {
      await dispatch("fetchIngredients");
    }
  },
  modules: {}
})
