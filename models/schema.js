const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  id: String,
  name: String,
  unit: String,
  category: String,
  stock: Number,
  unitcost: Number,
  remark: String
})

const recipeSchema = new mongoose.Schema({
  id: String,
  name: String,
  ingredients: Array,
  cost: Number,
  remark: String
})

module.exports = {
  Ingredient: mongoose.model('Ingredient', ingredientSchema),
  Recipe: mongoose.model('Recipe', recipeSchema)
};