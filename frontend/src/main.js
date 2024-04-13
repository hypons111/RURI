import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/reset.css";
import "./assets/css/globe.css";
import axios from "axios";
import url from "./X/X_url";
import api from "./assets/js/api";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faPenToSquare,
  faHouse,
  faTrash,
  faCubesStacked,
  faCheese,
  faFileInvoiceDollar,
  faFloppyDisk,
  faXmark,
  faCopy,
  faArrowTurnUp,
  faArrowsRotate,
  faUpDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faPlus,
  faPenToSquare,
  faHouse,
  faTrash,
  faCubesStacked,
  faCheese,
  faFileInvoiceDollar,
  faFloppyDisk,
  faXmark,
  faCopy,
  faArrowTurnUp,
  faArrowsRotate,
  faUpDown
);

const app = createApp(App);
app.provide("axios", axios);
app.provide("URL", url);
app.provide("API", api);
app.use(store).use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
