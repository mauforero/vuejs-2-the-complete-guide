import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

// Define the counter module for the store
const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};

export default counterModule;
