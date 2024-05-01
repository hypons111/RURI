# backend 紀錄

## 2024-02-15
就因為多手將 frontend，backend 改成寫埋一包，git、atlas、heroku 全部要重新連過，不過下次就會目醒開定 folder 先。

新增咗 RURI/Procfile。
Procfile 用途係 heroku 用嚟指定應用啟動命令嘅文件，基本上會放喺推去 git 嘅根目錄（RURI）。
但係如果前端放喺另一個 heroku app，前後共用一個Procfile會唔會有問題呢？

__!__ Atlas 暫時只可以開 0.0.0.0/0 先連到，放到最後先解決。

下一步就係喺 frontend 連 api。


## 2024-02-20
node.js 後端有 **cors** 套件用嚟處理 CORS 問題，好方便。

要喺根目錄用 `git subtree push --prefix backend heroku main` 推去 heroku.



## 2024-03-23
動態條件查詢要加`for in`篩走無用嘅條件：
```
router.post("/queryIngredients", async (req, res) => {
  const requestData = {}
  for (const key in req.body) {
    if (req.body[key]) {
      requestData[key] = req.body[key]
    }
  }
  try {
    const ingredients = await Ingredient.find(requestData, { __v: false  }); // 排除 __v，__v係mongoDB內部資料
    res.send(ingredients);
  } catch (error) { res.status(500).send("ERROR : " + error); }
});
```

用嚟解析 request body，如果唔係`req.body`會係undefined。
一定要喺加喺`app.use("/RURI", router)`之前。
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



## 2024-03-24
```
router.post("/addIngredient", async (req, res) => {
  const requestData = {}
  
  /* 新增暫時用`for in`檢查資料，之後轉用**schema**檢查。 */
  for (const key in req.body) {
    if (req.body[key]) {
      requestData[key] = req.body[key]
    }
  }
  const newIngredient = new Ingredient(requestData);  // 宣告模型 = new schema(請求資料);
  newIngredient.save()
  
    /* response回傳一個長度為**2**陣列俾前端：response[0]係請求有無成功執行嘅boolean，response[1]係成功／失敗信息。*/
    .then(() => res.send([true, "success"]))
    .catch(error => res.send([false, error]))
});
```


## 2024-03-25
改寫 router 嘅結構，統一用 `.then().catch()`。

mongoose CRUD 方法：
### Create
`.save(options, callback)`
options (Object, 可選): 保存操作的選項。
callback (Function, 可選): 保存操作完成後的回調函數。如果未提供，.save() 會返回一個 Promise。

### Read
`.find(query, projection, options, callback)` 
query (Object): 用於匹配文檔的查詢條件。
projection (Object, 可選): 指定返回的字段。如果不指定，則返回所有字段。
options (Object, 可選): 包括限制、跳過、排序等選項。
callback (Function, 可選): 查詢完成後的回調函數。如果未提供，.find() 會返回一個 Promise。

### Update
`.findByIdAndUpdate(id, update, options, callback)`
id (ObjectID | String): 要查找的文檔的 _id。
update (Object): 要應用於文檔的更新操作。
options (Object, 可選): 包括 new, upsert 等選項。new: true 會返回更新後的文檔。
callback (Function, 可選): 操作完成後的回調函數。如果未提供，方法返回一個 Promise。

### Delete
`.findOneAndDelete(filter, options, callback)`
filter (Object): 用於匹配文檔的查詢條件。
options (Object, 可選): 包括限制、排序等選項。
callback (Function, 可選): 操作完成後的回調函數。如果未提供，方法返回一個 Promise。


## 2024-04-09
mongoDB 模糊查詢係以 regEx 嚟查，
```
const string = "蛋"；
requestData = { $regex: string, $options: 'i' };
// "蛋"，"雞蛋"、"蛋糕"、"煎蛋" 等都會被匹配
// 更複雜的匹配模式（例如，只匹配以 "蛋" 開頭），就要在模式字符串中加入相應的正則表達式語法。
```


## 2024-05-01
ingredientSchema 刪除 category 同 remark、增加 label 陣列。

### mongoDB 語法：
#### 新增欄位
db.collection欄位.updateMany(
   {}, // 篩選條件，空對象表示匹配所有文檔
   { $set: { 新增的欄位名稱: 資料形態 } } // 資料形態：""，[]，0
);

#### 移除欄位
```
db.collection欄位.updateMany(
   {}, // 篩選條件，空對象表示匹配所有文檔
   { $unset: { 移除的欄位名稱: "" } }
);
```

#### 更改欄位名稱
```
db.collection欄位.updateMany(
   {},
   { $rename: { "舊的欄位名稱": "新的欄位名稱" } }
);
```