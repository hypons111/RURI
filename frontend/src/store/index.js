import { createStore } from 'vuex'
import axios from 'axios';
import URL from "../assets/js/url";

export default createStore({
  state: {
    INGREDIENTS: [],
    DESSERTS: [],
    ORDERS: []
  },
  getters: {
    INGREDIENTS: state => state.INGREDIENTS,
    DESSERTS: state => state.DESSERTS,
    ORDERS: state => state.ORDERS
  },
  mutations: {
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
      commit("SET_INGREDIENTS", response.data)
    },
    async fetchDesserts({ commit }) {
      const reponse = await axios.get(URL.url("getAllDesserts"))
      commit("SET_DESSERTS", response.data)
    },
    async fetchDesserts({ commit }) {
      const reponse = await axios.get(URL.url("getAllOrders"))
      commit("ORDERS", response.data)
    },
    async fetchAll({ dispatch }) {
      await dispatch("fetchIngredients")
    }
  },
  modules: {}
})
