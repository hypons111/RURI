const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  id: String,
  name: String,
  unit: String,
  category: String,
  stock: Number,
  unitcost: Number,
  remark: String
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