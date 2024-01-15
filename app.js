const express = require("express");
const app = express();
require('dotenv').config(); 
const mongoose = require("mongoose")
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

console.log(MONGO_URI)

app.get("/", (request, response) => {
  response.send("Hello World.");
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`)
})

mongoose.connect(MONGO_URI)
.then(() => console.log("Conneted to MongoDB"))
.catch((error) => console.error('Could not connect to MongoDB...', error));
