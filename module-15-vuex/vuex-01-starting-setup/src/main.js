import { createApp } from 'vue';

import App from './App.vue';
import store from './store/index.js';

// Define the authentication module for the store

const app = createApp(App);
app.use(store);
app.mount('#app');
