export default {
  async setTitle(context) {
    setTimeout(() => {
      context.commit({
        type: 'setTitle',
        value: 'Learning Vuex',
      });
    }, 2 * 1000);
  },
};
