export default {
  setTotal: (state, payload) => {
    return (state.total = payload.value);
  },
  setQty: (state, payload) => (state.qty = payload.value),
  addProductToCart: (state, payload) => state.items.push(payload.product),
  setItemQty: (state, payload) =>
    (state.items[payload.index].qty = payload.value),
  removeProductFromCart: (state, payload) =>
    state.items.splice(payload.index, 1),
};
