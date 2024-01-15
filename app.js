const express = require("express");
const mongoose = require("mongoose")
require('dotenv').config();  // 要用 .env 存取全域變數就要安裝 dotenv
const app = express();
const PORT = process.env.PORT;  // 從 .env 取得 PORT 常數
const DATABASE_URL = process.env.DATABASE_URL;  // 從 .env 取得 DATABASE_URL 常數

// 監聽 port:3000  
app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`)
})

// 連接 mongoDB
mongoose
.connect(DATABASE_URL)
.then(() => console.log("Conneted to MongoDB"))
.catch((error) => console.error('Could not connect to MongoDB...', error));


app.get("/RURI", (request, response) => {
  response.send("This is RURI.");
})
