<template>
  <button @click="incrementCounter">Increment Counter Async</button>
  <button @click="increment">Increment Counter Async 2</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    addOne() {
      // Trigger the mutation from the store
      // this.$store.commit({
      //   type: 'incrementCounter',
      //   value: 10,
      // });

      // Call the incrementCounter action from the store
      this.$store.dispatch('incrementCounter');
    },
    ...mapActions(['incrementCounter']),
    // or
    ...mapActions({
      increment: 'incrementCounter',
    }),
  },
};
</script>
