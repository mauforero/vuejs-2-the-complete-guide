import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  // mutations should hold the logic to manage the state
  // mutations are ALWAYS SYNCHRONOUS!!!
  mutations: {
    incrementCounter(state) {
      state.counter = state.counter + 1;
    },
    // By introducing a "payload" we can change the state dynamically
    incrementCounterByPayload(state, payload) {
      state.counter = state.counter + payload.value;
    },
    setUserAuth(state, payload) {
      state.isLoggedIn = payload.auth;
    },
  },
  // actions allow us to run async code to trigger mutations
  // actions should always be called from components
  // instead of calling mutations directly
  actions: {
    // The context object contains all the store methods to manage the state
    // commit, dispatch, getters and the state itself
    incrementCounter(context) {
      setTimeout(() => {
        context.commit('incrementCounter');
      }, 2 * 1000);
    },
    loginUser(context) {
      setTimeout(() => {
        context.commit({
          type: 'setUserAuth',
          auth: true,
        });
      }, 500);
    },
    logoutUser(context) {
      setTimeout(() => {
        context.commit('setUserAuth', {
          auth: false,
        });
      }, 1 * 1000);
    },
  },
  // getters are like computed properties for state
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
    isUserLoggedIn(state) {
      return state.isLoggedIn;
    },
    userStatusText(state, getters) {
      return getters.isUserLoggedIn
        ? 'User is authorized'
        : 'User is not authorized';
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount('#app');
