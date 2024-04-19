<template>
  <button @click="addOne">Add One</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      this.$store.commit({
        type: 'incrementCounterByPayload',
        value: 10,
      });
    },
  },
};
</script>
