const express = require('express');
const router = express.Router();
const { Ingredient, Dessert, Order } = require('./schema');  // 取得 schema

/* 主頁 */
router.get("/home", (req, res) => {
  res.send("RURI home page");
})

/* 全部材料 */
router.get("/getAllIngredients", (req, res) => {
  Ingredient.find({}, { __v: false })
    .then(ingredients => {
      return ingredients.map(ingredient => {
        let ppu = 0;
        if (ingredient.inventoryValue > 0 && ingredient.inventory > 0) {
          ppu = Math.round((ingredient.inventoryValue / ingredient.inventory) * 100) / 100
        }
        return {
          _id: ingredient._id,
          id: ingredient.id,
          name: ingredient.name,
          inventory: ingredient.inventory,
          inventoryValue: ingredient.inventoryValue,
          pricePerUnit: ppu,
          unit: ingredient.unit,
          label: ingredient.label
        };
      });
    })
    .then(ingredients => res.send([true, ingredients]))
    .catch(error => res.send([false, error.message]))
});

/* 查詢材料 */
router.post("/queryIngredients", (req, res) => {
  const requestData = {}
  for (const key in req.body) {
    if (req.body[key]) {
      if (key === "name" || key === "remark") {
        requestData[key] = { $regex: req.body[key], $options: 'i' };
      } else {
        requestData[key] = req.body[key]
      }
    }
  }
  Ingredient.find(requestData, { __v: false })
    .then(ingredients => res.send([true, ingredients]))
    .catch(error => res.send([false, error.message]))
});

/* 新增材料 */
router.post("/addIngredient", (req, res) => {
  const requestData = {}
  for (const key in req.body) {
    if (req.body[key] && key !== "_id") {
      requestData[key] = req.body[key]
    }
  }
  const newIngredient = new Ingredient(requestData);
  newIngredient.save()
    .then(() => res.send([true, "success"]))
    .catch(error => res.send([false, error.message]))
});

/* 修改材料 */
router.post("/editIngredient", (req, res) => {
  const requestData = {};
  for (const key in req.body) {
    if (req.body[key] && key !== "_id") {
      requestData[key] = req.body[key]
    }
  }
  Ingredient.findByIdAndUpdate(req.body._id, requestData, { new: true })
    .then(response => res.send([true, response]))
    .catch(error => res.send([false, error.message]))
});

/* 刪除材料 */
router.post("/deleteIngredient", (req, res) => {
  const requestData = {
    _id: ""
  }
  if (req.body._id) requestData._id = req.body._id;
  Ingredient.findOneAndDelete(requestData)
    .then(response => {
      if (response) return res.send([true, "success"]);
      else return res.send([false, "failed"]);
    })
    .catch(error => res.send([false, error.message]))
});

/* 全部甜品 */
router.get("/getAllDesserts", (req, res) => {
  Dessert.find({}, { __v: false })
    .then(desserts => res.send([true, desserts]))
    .catch(error => res.send([false, error.message]))
});

/* 全部訂單 */
router.get("/getAllOrders", (req, res) => {
  Order.find({}, { __v: false })
    .then(orders => res.send([true, orders]))
    .catch(error => res.send([false, error.message]))
});
module.exports = router;