import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/reset.css';
import axios from "axios";
import url from './assets/js/url';
import api from './assets/js/api';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlus);

const app = createApp(App);
app.provide('axios', axios);
app.provide('URL', url);
app.provide('API', api);
app.use(store).use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

// createApp(App)
//   .use(router)
//   .component('font-awesome-icon', FontAwesomeIcon)
//   .mount('#app')