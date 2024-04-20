export default {
  incrementCounter(context) {
    setTimeout(() => {
      context.commit('incrementCounter');
    }, 2 * 1000);
  },
};
