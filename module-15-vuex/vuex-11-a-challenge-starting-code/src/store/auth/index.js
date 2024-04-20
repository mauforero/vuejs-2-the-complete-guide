const authModule = {
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuthentication(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      setTimeout(() => {
        context.commit({
          type: 'setAuthentication',
          isAuth: true,
        });
      }, 500);
    },
    logout(context) {
      setTimeout(() => {
        context.commit({
          type: 'setAuthentication',
          isAuth: false,
        });
      }, 500);
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
};

export default authModule;
