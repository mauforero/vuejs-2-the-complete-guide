<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <display-counter></display-counter>
    <button @click="addOne">Add One</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import DisplayCounter from './components/DisplayCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    DisplayCounter,
  },
  methods: {
    addOne() {
      this.$store.commit('incrementCounter');
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
