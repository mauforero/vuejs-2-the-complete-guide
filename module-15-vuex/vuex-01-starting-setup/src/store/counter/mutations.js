export default {
  incrementCounter(state) {
    state.counter = state.counter + 1;
  },
  // By introducing a "payload" we can change the state dynamically
  incrementCounterByPayload(state, payload) {
    state.counter = state.counter + payload.value;
  },
};
