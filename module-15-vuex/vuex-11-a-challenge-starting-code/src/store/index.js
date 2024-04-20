import { createStore } from 'vuex';
import authModule from './auth';
import productModule from './product';

const store = createStore({
  modules: {
    auth: authModule,
    product: productModule,
  },
});
export default store;
