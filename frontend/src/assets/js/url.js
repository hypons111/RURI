function url(name) {
  if (name === '' || !name) {
    throw new Error('API name is required');
  }
  const BASE_URL = "https://ruri-7e39a394056b.herokuapp.com";
  const APP_NAME = "/RURI"
  const apis = {
    getAllIngredients: '/getAllIngredients', /* 全部材料 */
    getAllDesserts: '/getAllDesserts', /* 全部甜品 */
    getAllOrders: '/getAllOrders', /* 全部訂單 */
    queryIngredients: '/queryIngredients', /* 材料 */
  }
  return BASE_URL + APP_NAME + apis[name];
}

export default {
  url
}
