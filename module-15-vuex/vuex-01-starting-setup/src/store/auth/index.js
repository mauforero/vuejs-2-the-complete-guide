const authModule = {
  // state is local for a module hence isLoggedIn won't be directly
  // accessible to counterModule
  state() {
    return {
      isLoggedIn: false,
    };
  },
  // mutations should hold the logic to manage the state
  // mutations are ALWAYS SYNCHRONOUS!!!
  mutations: {
    setUserAuth(state, payload) {
      state.isLoggedIn = payload.auth;
    },
  },
  // actions allow us to run async code to trigger mutations
  // actions should always be called from components
  // instead of calling mutations directly
  actions: {
    // The context object contains all the store methods to manage the state
    // commit, dispatch, getters and the state itself
    loginUser(context) {
      setTimeout(() => {
        context.commit({
          type: 'setUserAuth',
          auth: true,
        });
      }, 500);
    },
    logoutUser(context) {
      setTimeout(() => {
        context.commit('setUserAuth', {
          auth: false,
        });
      }, 1 * 1000);
    },
  },
  // getters are like computed properties for state
  getters: {
    isUserLoggedIn(state) {
      return state.isLoggedIn;
    },
    userStatusText(state, getters) {
      return getters.isUserLoggedIn
        ? 'User is authorized'
        : 'User is not authorized';
    },
    /**
     * In case I have to access the state from authModule I could
     * pass the paremeters rootState and rootGetters to the getter
     *
     * accessOtherModuleState(state, getters, rootState, rootGetters) {
     *
     * }
     */
  },
};

export default authModule;
