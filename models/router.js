const express = require('express');
const router = express.Router();
const { Ingredient, Dessert, Order } = require('./schema');  // 取得 schema

/* 主頁 */
router.get("/home", (req, res) => {
  res.send("RURI home page");
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
    console.log("start");
    const desserts = await Dessert.find();
    console.log(desserts);
    console.log("end");
    res.send(desserts);
  } catch (error) { res.status(500).send("ERROR : " + error); }
});

/* 全部訂單 */
router.get("/getAllOrders", async (req, res) => {
  try {
    const orders = await Order.find().maxTime(100000);
    res.send(orders);
  } catch (error) { res.status(500).send("ERROR : " + error); }
});

/* 查詢甜品 */
router.get("/queryRecipe", async (req, res) => {
  try {
    const query = {}; // 將查詢條件
    for (key in req.query) {
      query[key] = req.query[key] // 將存在的條件放入物件
    }
    const recipes = await Recipe.find(query);
    res.send(recipes);
  } catch (error) { res.status(500).send("ERROR : " + error); }
})

/* 全部訂單 */
router.get("/test", async (req, res) => {
  try {
    const text = "fuckthisshit"
    res.send(text)
  } catch (error) { res.status(500).send("ERROR : " + error); }
});

module.exports = router;