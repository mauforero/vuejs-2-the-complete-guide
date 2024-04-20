<template>
  <h3>Normalized counter: {{ normalizedCounter }}</h3>
  <h3>Normalized counter: {{ counter }}</h3>
</template>

<script>
// mapGetters allows to access getters from the store without referencing it directly
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter: function () {
    //   return this.$store.getters.normalizedCounter;
    // },
    ...mapGetters(['normalizedCounter']),
    // or
    ...mapGetters({
      counter: 'normalizedCounter',
    }),
  },
};
</script>
