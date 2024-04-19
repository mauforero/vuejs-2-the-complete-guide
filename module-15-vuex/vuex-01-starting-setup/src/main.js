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
  // Getters are like computed properties for state
  getters: {
    counterTimesThree(state) {
      return state.counter * 3;
    },
    // getters allows to access other getters defined here
    normalizedCounter(state, getters) {
      const finalCounter = getters.counterTimesThree;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }

      return finalCounter;
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount('#app');
