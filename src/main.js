import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store/index.js';
import router from './router/index.js';
const app = createApp(App);
app.use(router).use(store);
app.mount('#app');
