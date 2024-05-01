# frontend 紀錄

## 2024-02-03
無用 TypeScript 因為得我一個寫，同埋好似會係用嚟檢查型別，未感受到佢有用嘅地方。
eslint 真係好煩，所以最後都係唔用。
BootStrap-vue 唔支援 vue ，本來想用其他 plugin，但又好似無乜需要。

## 2024-02-10
其實 searchBar 同 table 係應該寫喺一個組件，但我又想試吓子組件同子組仔之間互傳資料，所以夾硬寫埋一齊。
原理：父元件宣告一個 **響應式變數** 同一個 **用嚟改呢個變數嘅方法** 傳俾 **A子組件** ，再將呢個變數傳俾 **B子組件**，就可以 **A** 傳 **B**。

## 2024-02-19
vue-cli 會用 Webpack 打包，唔怪得唔洗手動裝 Webpack。


## 2024-02-25
重新設計各個元件：
  url.js：管理 url。
  api.js：管理 api request。暫時只有三個 .get() api，會接收一個字串參數，喺 url.js 取得對應嘅 url。
  serachBar.vue 同 dataTable.vue 最後都係合埋嚟寫，分開寫除咗可以練習 "子組件同子組仔之間互傳資料" 之外，完全係搵嚟搞。

遇到 Warning：`[Warning] Feature flag __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ is not explicitly defined.`
原因： **vue cli** 預置使用 **ESM-Bundler**。**ESM-Bundler** 想用 **__VUE_PROD_HYDRATION_MISMATCH_DETAILS__**。
解法： **唔係SSR** SSR 網站，可以忽略。
      **係SSR**  網站：**vue cli** 預置使用 Webpack，透過 **vue.config.js** 修改 Webpack，把 _、VUE_PROD_HYDRATION_MISMATCH_DETAILS 設定為 true。

chat-GPT：
> vue 提供了不同的構建版本以適應不同的開發場景。當使用現代前端開發工具（如Webpack、Vite等）時，推薦使用基於ES模塊（ESM）的構建版本，也就是所謂的 esm-bundler 版本。這個版本特別適合於這些工具，因為它允許這些工具利用ES模塊的特性來進行代碼分割和樹搖（tree-shaking），從而優化最終的構建結果。

> 功能標誌（Feature Flags）：vue 的esm-bundler 版本使用了功能標誌來在編譯時控制某些功能的啟用或禁用。這些功能標誌可以幫助進一步優化構建輸出，並允許開發者根據需要啟用或禁用 vue 的特定功能。__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ 就是這樣一個功能標誌，它用於控制 vue 在生產模式下是否提供關於 hydration 不匹配的詳細信息。

> 通過 **vue.config.js** 修改 Webpack：由於vue CLI 項目預設使用 Webpack 作為其打包工具，你可以通過修改 **vue.config.js** 文件來自定義 Webpack 的配置。在這個文件中，你可以使用 chainWebpack 或 configureWebpac k選項來設置 Webpack 的 DefinePlugin 插件，從而在全局範圍內定義功能標誌。這樣，當 vue CLI 進行構建時，就會根據這些設置來處理和打包你的vue應用。

> 樹搖（Tree-shaking）：是一種通過移除 JavaScript 中未被使用的代碼來減少最終文件大小的過程。這是現代打包工具（如Webpack、Rollup、Vite等）的一個特性，它們能夠分析模塊之間的導入導出關係，並且在構建過程中只包含真正被使用到的代碼。這樣可以有效減小應用的體積，提高加載速度和性能。

> 延遲加載（Lazy Loading）：是一種優化網頁或應用加載速度的技術，它允許將某些資源的加載推遲到真正需要時再進行。在Web開發中，這通常指的是對腳本、圖像或組件進行延遲加載。例如， vue 應用可以將某些組件設置為只有在用戶執行特定操作時才加載，這樣可以減少初始加載時間，提升用戶體驗。


## 2024-03-08
在網站入口取得 __材料__，__甜品__，__訂單__，全部資料存在 store，然後在每個 **頁面.vue** 傳相關參數去 **元件.vue**，**元件.vue** 根據參數在 store 取得資料。 

### store 基本用法：
```
export default createStore({
  state: {},      // 要存放的資料
  getters: {},    // 取得響應式資料，可以使用 computed 回傳經過處理的資料。
  mutations: {},  // 同步地改變資料
  actions: {},    // 非同步地取得資料，再經 mutation 同步地改變資料
  modules: {}     // 管理大型應用的狀態
})
```

使用方法：
```
import { useStore } from "vuex";
const store = useStore();

const getData = store.state.someValue； // 取得原始資料
const getComputedData = store.getters.someValue； // 取得經過處理的資料
store.commit('mutationName', payload 可選); // 使用mutation，mutationName是mutations中的方法名稱，payload是新資料。
store.dispatch('actionName', payload 可選); // 使用action，actionName是action中的方法名稱，payload是新資料。

```


## 2024-03-10
加入font-awesome


## 2024-03-17
材料畫面基本排版完成。dataTable資料量很少不做分頁。為了視覺上齊整，把thead和tbody分成兩個table，tbody scroll時，thead仍然會留在頂部。

材料data在dataTable上沒有按id順序，下次再調。還有要把CATEGORY以hash tag的方式使用。

因為畫面很簡潔，這次rwd效果很不錯。


## 2024-03-21
用`<component :is="switchComponent"></component>`控制modal內容，
currentComponent是狀態，switchComponent根據currentComponent的狀態回傳適合的modal。
```
import ingredientModal from "./components/IngredientModal";

const currentComponent = ref("ingredient");

const switchComponent = computed(() => {
  switch (currentComponent.value) {
    case "ingredient":
      return ingredientModal;
    case "dessert":
    case "order":
      alert("未有");
  }
});
```


## 2024-03-22
`<select>`和`<option>`都不支援svg(font awesome)。
`<select>` 要改右邊嘅嘅icon顏色可以直接改 **fill** 和 **stroke**
```
  /* css selector {
    --bs-form-select-bg-img: url(data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23395b74%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e);
  } */
```

`@click`和`@change`之後的function可以不加()，而且可以直接在`function funcName(event)`使用event參數。

`<button>`onclick時會切換 **isShow** boolean值，來控制`<div>`會不會套用 **isShow** 樣式。
```
<div :class="{ isShow: isShow }"></div>
<button @click="isShow = !isShow"></button>
```


## 2024-03-23
全撈**INGREDIENTS**資料轉咗放喺`ALL_INGREDIENTS`，**INGREDIENTS**用嚟顯示查詢出嚟嘅結果（**DESSERTS**同**ORDERS**都係）。


## 2024-03-25
而家ingredient嘅edit, delete都寫咗喺SerchTable.vue conponent入面，下次要諗下啲樣拆返出嚟。


## 2024-04-09
`.trim()` 在 vue 的用法。
```
<input type="text" v-model.trim="item"/>
```


## 2024-04-13
停用 component 組件，轉成三個頁面嘅 model 都放喺 updateModal.vue，用 `v-if` 控制。

component 用法紀錄：
```
</template>
  <component :is="switchComponent"></component>
</template>

<script setup>
  import ingredientModal from "./IngredientModal";
  import dessertModal from "./DessertModal";
  import orderModal from "./OrderModal";
  const currentPage = ref("ingredient");
  const switchComponent = computed(() => {
    switch (currentPage.value) {
      case "ingredient":
        return ingredientModal;
      case "dessert":
        eturn dessertModal;
      case "order":
        return orderModal;
    }
  });
</script>
```

新增 3 個 store:
CURRENT_VIEW:     // String，控制 updateModal 頁面。
CURRENT_OPTION:   // String，控制 updateModal 功能。
CURRENT_DATA:     // Object，updateModal input、requestData 嘅值。

Ingredient CRUD 都大致完成，但係要研究吓點同另外兩個 view 嘅功能共用一啲 function 同 variable。本來想用一個 updateHandler() 就分流晒咁多個 add 同 edit 嘅 request。但有大多 customize 嘅資料要處理先可以 request，結果同拆開做無分別。

將 url.js 合拼去 api.js 

Quest left:
設計 updateHandle 分流。
Ingredient CATEGORY 改為 hard code。
計算 Ingredient 成本 api。
計算 Ingredient 成本 介面。

將全部 `store.state` 都改成 `store.getters`


## 2024-05-01
updateHandler() 新增 / 修改資料後會關閉 modal和更新畫面資料。