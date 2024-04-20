<template>
  <h3>This is the counter multiplied by 3: {{ counter }}</h3>
</template>

<script>
export default {
  computed: {
    counter: function () {
      return this.$store.getters['calculation/counterTimesThree'];
    },
  },
};
</script>
