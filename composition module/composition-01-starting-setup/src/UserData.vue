<template>
  <section class="container">
    <div>
      <h3>{{ userName }}</h3>
      <p></p>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const userName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    context.emit('custom-event'); // replaces this.$emit

    return {
      userName,
    };
  },
  // Options API works too
  // computed: {
  //   userName: function () {
  //     return `${this.firstName} ${this.lastName}`;
  //   },
  // },
};
</script>
