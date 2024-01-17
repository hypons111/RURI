const express = require('express');
const router = express.Router();
const { Ingredient, Dessert, Order } = require('./schema');  // 取得 schema

/* 主頁 */
router.get("/home", (req, res) => {
  res.send("This is RURI.");
})

/* 全部材料 */
router.get("/queryAllIngredients", async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.send(ingredients);
  } catch (error) { res.status(500).send("ERROR : " + error); }
});

/* 全部甜品 */
router.get("/getAllDesserts", async (req, res) => {
  try {
    const desserts = await Dessert.find();
    res.send(desserts);
  } catch (error) { res.status(500).send("ERROR : " + error); }
});

/* 全部訂單 */
router.get("/getAllOrders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.send(orders);
  } catch (error) { res.status(500).send("ERROR : " + error); }
});

/* 查詢甜品 */
router.get("/queryRecipe", async(req, res) => {
  try{
    const query = {}; // 將查詢條件
    for(key in req.query) {
      query[key] = req.query[key] // 將存在的條件放入物件
    }
    const recipes = await Recipe.find(query);
    res.send(recipes);
  } catch (error) { res.status(500).send("ERROR : " + error); }
})

module.exports = router;