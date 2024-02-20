function API(name) {
  if (name === '' || !name) {
    return '404'
  }
  const HEROKU_URL = "https://ruri-7e39a394056b.herokuapp.com";
  const apis = {
    getAllIngredients: '/getAllIngredients', /* 全部材料 */
    getAllDesserts: '/getAllDesserts', /* 全部甜品 */
    getAllOrders: '/getAllOrders' /* 全部訂單 */
  }
  return HEROKU_URL + apis[name];
}

export default API
