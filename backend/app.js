require('dotenv').config();  // 要用 .env 存取全域變數就要安裝 dotenv
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT;  // 從 .env 取得 PORT 常數
const DATABASE_URL = process.env.DATABASE_URL;  // 從 .env 取得 DATABASE_URL 常數
const router = require('./models/router');  // 路由處理器

/* 監聽 port:3000 */
app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`)
})

/* 處理 CORS */
app.use(cors());

/* 加前綴到路由處理器 */
app.use("/RURI", router);

/* 連接 mongoDB 設定 */
const clientOptions = {
  serverApi: {
    version: '1',
    strict: true, // 設為 true 時，如果使用了 MongoDB 標記為不推薦（deprecated）的功能，會拋出錯誤。
    deprecationErrors: true // 設為 true 時，如果使用了 MongoDB 中已被標記為弃用的特性，MongoDB 會拋出錯誤。
  }
};

/* 連接 mongoDB */
async function run() {
  try {
    await mongoose.connect(DATABASE_URL, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 }); // 連線測試
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await mongoose.disconnect(); // 關閉連線
  }
}
run().catch(console.dir);



/* 連接 mongoDB */
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
