// the root store
import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './counter/index.js';
import authModule from './auth/index.js';

// initialize the store with both modules
const store = createStore({
  modules: {
    auth: authModule,
    calculation: counterModule,
  },
  state() {
    return {
      title: '',
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
