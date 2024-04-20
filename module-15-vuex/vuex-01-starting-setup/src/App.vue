<template>
  <base-container title="Vuex" v-if="isUserLoggedIn">
    <the-counter></the-counter>
    <display-counter></display-counter>
    <button @click="addOne">Increment Counter</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import DisplayCounter from './components/DisplayCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    DisplayCounter,
    UserAuth,
  },
  computed: {
    isUserLoggedIn: function () {
      return this.$store.getters.isUserLoggedIn;
    },
  },
  methods: {
    addOne() {
      this.$store.commit('calculation/incrementCounter');
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
