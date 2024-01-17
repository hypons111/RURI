const express = require('express');
const router = express.Router();
const { Ingredient, Recipe } = require('./schema');  // 取得 schema

router.get("/home", (req, res) => {
  res.send("This is RURI.");
})

router.get("/queryIngredient", async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.send(ingredients);
  } catch (error) { res.send("ERROR : " + error); }
});

router.get("/queryRecipe", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.send(recipes);
  } catch (error) { res.send("ERROR : " + error); }
});

module.exports = router;