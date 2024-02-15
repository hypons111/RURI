# backend 紀錄



## 2024-02-15
就因為多手將 frontend，backend 改成寫埋一包，git、atlas、heroku 全部要重新連過，不過下次就會目醒開定 folder 先。

新增咗 RURI/Procfile。
Procfile 用途係 heroku 用嚟指定應用啟動命令嘅文件，基本上會放喺推去 git 嘅根目錄（RURI）。
但係如果前端放喺另一個 heroku app，前後共用一個Procfile會唔會有問題呢？

__**__ Atlas 暫時只可以開 0.0.0.0/0 先連到，放到最後先解決。

下一步就係喺 frontend 連 api。