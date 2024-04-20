export default {
  counterTimesThree(state) {
    return state.counter * 3;
  },
  // the getters parameter allows to access other getters defined here
  normalizedCounter(state, getters) {
    const finalCounter = getters.counterTimesThree;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }

    return finalCounter;
  },
};
