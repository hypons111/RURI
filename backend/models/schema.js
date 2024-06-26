const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  id: String,
  name: String,
  inventory: Number,
  inventoryValue: Number,
  unit: String,
  label: Array
}, { collection: 'ingredients' })

const dessertSchema = new mongoose.Schema({
  id: String,
  name: String,
  ingredients: Array,
  cost: Number,
  remark: String
}, { collection: 'desserts' })

const orderSchema = new mongoose.Schema({
  id: String,
  items: Array,
  totalcost: Number,
  createdate: Date,
  shippingdate: Date,
  remark: String,
}, { collection: 'orders' })

module.exports = {
  Ingredient: mongoose.model('Ingredient', ingredientSchema),
  Dessert: mongoose.model('Dessert', dessertSchema),
  Order: mongoose.model('Order', orderSchema)
};