import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  // mutations should hold the logic to manage the state
  mutations: {
    incrementCounter(state) {
      state.counter = state.counter + 1;
    },
    // By introducing a "payload" we can change the state dynamically
    incrementCounterByPayload(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount('#app');
