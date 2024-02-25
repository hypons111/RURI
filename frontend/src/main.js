import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/reset.css'
import axios from "axios";
import url from './assets/js/url';
import api from './assets/js/api';

const app = createApp(App);
app.provide('axios', axios);
app.provide('URL', url);
app.provide('API', api);
app.use(store).use(router).mount('#app')
