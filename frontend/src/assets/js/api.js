import axios from 'axios';

function url(name) {
  if (name === '' || !name) {
    throw new Error('API name is required');
  }
  // const BASE_URL = "https://ruri-7e39a394056b.herokuapp.com"; // heroku
  const BASE_URL = "http://localhost:3000"; // localhost
  const APP_NAME = "/RURI"
  const apis = {
    /* 材料 */
    getAllIngredients: '/getAllIngredients', /* 全部材料 */
    queryIngredients: '/queryIngredients', /* 查詢材料 */
    addIngredient: '/addIngredient', /* 新增材料 */
    editIngredient: '/editIngredient', /* 新增材料 */
    deleteIngredient: '/deleteIngredient', /* 新增材料 */
    /* 材料 */

    /* 甜品 */
    getAllDesserts: '/getAllDesserts', /* 全部甜品 */
    /* 甜品 */

    /* 訂單 */
    getAllOrders: '/getAllOrders', /* 全部訂單 */
    /* 訂單 */
  }
  return BASE_URL + APP_NAME + apis[name];
}

const requestConfig = {
  headers: {
    "Content-Type": 'application/json'
  }
};

function axiosGet(apiName) {
  return axios.get(url(apiName))
}

function axiosPost(apiName, requestData) {
  return axios.post(url(apiName), requestData, requestConfig)
}

function axiosPut() { }

function axiosDelete() { }

export default {
  axiosGet,
  axiosPost,
  axiosPut,
  axiosDelete
}
