function API (name) {
  if (name === '' || !name) {
    return '404'
  }
  const api = {
    getAllIngredients: '/getAllIngredients', /* 全部材料 */
    getAllDesserts: '/getAllDesserts', /* 全部甜品 */
    getAllOrders: '/getAllOrders' /* 全部訂單 */
  }
  return api[name]
}

export default API
