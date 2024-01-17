const express = require("express");
const mongoose = require("mongoose")
require('dotenv').config();  // 要用 .env 存取全域變數就要安裝 dotenv
const app = express();
const PORT = process.env.PORT;  // 從 .env 取得 PORT 常數
const DATABASE_URL = process.env.DATABASE_URL;  // 從 .env 取得 DATABASE_URL 常數
const { Ingredient, Recipe } = require('./models/schema');  // 取得 schema


/* 連接 mongoDB */
mongoose
.connect(DATABASE_URL)
.then(() => console.log("Conneted to MongoDB"))
.catch((error) => console.error('Could not connect to MongoDB...', error));

/* 監聽 port:3000 */
app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`)
})



/* Rounters */
app.get("/RURI", (request, response) => {
  response.send("This is RURI.");
})

app.get("/queryIngredient", async (request, response) => {
  try {
    const ingredients = await Ingredient.find();
    response.json(ingredients);
  } catch (error) {
    console.error("ERROR : " + error.message);
    response.status(500).send("Error fetching users.");
  }
});

app.get("/queryRecipe", async (request, response) => {
  try {
    const recipes = await Recipe.find();
    response.json(recipes);
  } catch (error) {
    console.error("ERROR : " + error.message);
    response.status(500).send("Error fetching users.");
  }
});







/* MongoDB 原生 driver */
// const { MongoClient } = require('mongodb');
// const url = 'mongodb+srv://hypons:Zz94057704@ruri.wnonyie.mongodb.net/';
// const client = new MongoClient(url);
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db('ruri');
//     const collection = database.collection('user');
//     const users = await collection.find().toArray();
//     console.log(users);
//   } finally {
//     await client.close();
//   }
// }
// run();
