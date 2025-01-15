export default {
  getCartQty: (state) => state.qty,
  getCartTotal: (state) => state.total.toFixed(2),
  getCartItems: (state) => state.items,
  getCartItemIndex: (state) => (productId) =>
    state.items.findIndex((ci) => ci.productId === productId),
  getCartItemTotal: (state) => (productId) => {
    const product = state.items.find((ci) => ci.productId === productId);
    return (product.qty * product.price).toFixed(2);
  },
};
