const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();  // 要用 .env 存取全域變數就要安裝 dotenv
const app = express();
const PORT = process.env.PORT;  // 從 .env 取得 PORT 常數
const DATABASE_URL = process.env.DATABASE_URL;  // 從 .env 取得 DATABASE_URL 常數
const router = require('./models/router');  // 取得 api


/* 監聽 port:3000 */
app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`)
})
app.use("/ruri", router)



/* 連接 mongoDB */
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(DATABASE_URL, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);


// mongoose
//   .connect(DATABASE_URL)
//   .then(() => console.log("Conneted to MongoDB"))
//   .catch((error) => console.error('Could not connect to MongoDB...', error));




/* Router */
// app.get("/queryIngredient", async (req, res) => {
//   try {
//     const ingredients = await Ingredient.find();
//     res.json(ingredients);
//   } catch (error) { res.send(false); }
// });

// app.get("/queryRecipe", async (req, res) => {
//   try {
//     const recipes = await Recipe.find();
//     res.json(recipes);
//   } catch (error) { res.send(false); }
// });



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
