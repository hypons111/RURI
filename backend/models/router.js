const express = require('express');
const router = express.Router();
const { Ingredient, Dessert, Order } = require('./schema');  // 取得 schema

/* 主頁 */
router.get("/home", (req, res) => {
  res.send("RURI home page");
})

/* 全部材料 */
router.get("/getAllIngredients", async (req, res) => {
  try {
    const ingredients = await Ingredient.find({}, { _id: false }); // 排除 _id
    res.send(ingredients);
  } catch (error) { res.status(500).send("ERROR : " + error); }
});

/* 全部甜品 */
router.get("/getAllDesserts", async (req, res) => {
  try {
    const desserts = await Dessert.find({}, { _id: false });
    res.send(desserts);
  } catch (error) { res.status(500).send("ERROR : " + error); }
});

/* 全部訂單 */
router.get("/getAllOrders", async (req, res) => {
  try {
    const orders = await Order.find({}, { _id: false });
    res.send(orders);
  } catch (error) { res.status(500).send("ERROR : " + error); }
});

module.exports = router;