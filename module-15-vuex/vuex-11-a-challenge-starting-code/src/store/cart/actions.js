export default {
  addProductToCart: (
    { commit, state, getters, rootGetters },
    { productId }
  ) => {
    const products = rootGetters['product/getProductList'];
    const product = products.find((p) => p.id === productId);

    // check if the product already exists in the cart to update its qty
    const productInCartIndex = getters.getCartItemIndex(productId);
    if (productInCartIndex >= 0) {
      commit({
        type: 'setItemQty',
        index: productInCartIndex,
        value: state.items[productInCartIndex].qty + 1,
      });
    }
    // Add the product to cart
    else {
      const newProduct = {
        productId: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        qty: 1,
      };
      commit({
        type: 'addProductToCart',
        product: newProduct,
      });
    }
    // update cart info
    commit({
      type: 'setQty',
      value: state.qty + 1,
    });
    commit({
      type: 'setTotal',
      value: state.total + product.price,
    });
  },
  removeProductFromCart: ({ commit, state, getters }, { productID }) => {
    const productInCartIndex = getters.getCartItemIndex(productID);
    const { price, qty } = state.items[productInCartIndex];
    // remove the product from cart
    commit({
      type: 'removeProductFromCart',
      index: productInCartIndex,
    });
    // update cart info
    commit({
      type: 'setQty',
      value: state.qty - qty,
    });
    commit({
      type: 'setTotal',
      value: state.total - price * qty,
    });
  },
};
