<template>
  <button @click="addOne">Increment Counter Async</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // Execute the incrementCounter action from the store
      // this.$store.commit({
      //   type: 'incrementCounter',
      //   value: 10,
      // });
      this.$store.dispatch('incrementCounter');
    },
  },
};
</script>
