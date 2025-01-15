import { createStore } from 'vuex';
import authModule from './auth/index.js';
import productModule from './product/index.js';
import cartModule from './cart';

const store = createStore({
  modules: {
    auth: authModule,
    product: productModule,
    cart: cartModule,
  },
});
export default store;
