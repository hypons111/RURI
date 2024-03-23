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
    const ingredients = await Ingredient.find(requestData, { _id: false }); // 排除 _id
    res.send(ingredients);
  } catch (error) { res.status(500).send("ERROR : " + error); }
});
```

用嚟解析 request body，如果唔係`req.body`會係undefined。
一定要喺加喺`app.use("/RURI", router)`之前。
app.use(express.urlencoded({ extended: true }));
app.use(express.json());