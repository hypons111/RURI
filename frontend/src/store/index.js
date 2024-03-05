import { createStore } from 'vuex'

export default createStore({
  state: {
    INGREDINETS: [],
    DESSERTS: [],
    ORDERS: []
  },
  getters: {
    INGREDINETS: state => state.INGREDINETS,
    DESSERTS: state => state.DESSERTS,
    ORDERS: state => state.ORDERS
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  },
})
