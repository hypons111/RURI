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

const dessertSchema = new mongoose.Schema({
  id: String,
  name: String,
  ingredients: Array,
  cost: Number,
  remark: String
})

const orderSchema = new mongoose.Schema({
  id: String,
  items: Array,
  totalcost: Number,
  createdate: Date,
  shippingdate: Date,
  remark: String,
})

module.exports = {
  Ingredient: mongoose.model('Ingredient', ingredientSchema),
  Dessert: mongoose.model('Dessert', dessertSchema),
  Order: mongoose.model('Order', orderSchema)
};