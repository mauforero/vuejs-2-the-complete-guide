import cartMutations from './mutations.js';
import cartGetters from './getters.js';
import cartActions from './actions.js';

const cartModule = {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters,
};

export default cartModule;
