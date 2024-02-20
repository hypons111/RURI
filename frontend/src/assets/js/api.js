function API(name) {
  if (name === '' || !name) {
    return '404'
  }
  const HEROKU_URL = "https://ruri-7e39a394056b.herokuapp.com";
  const PAGE_NAME = "/RURI"
  const apis = {
    getAllIngredients: '/getAllIngredients', /* 全部材料 */
    getAllDesserts: '/getAllDesserts', /* 全部甜品 */
    getAllOrders: '/getAllOrders' /* 全部訂單 */
  }
  return HEROKU_URL + PAGE_NAME + apis[name];
}

export default API
