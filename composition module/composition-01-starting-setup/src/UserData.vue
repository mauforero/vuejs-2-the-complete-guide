<template>
  <section class="container">
    <div>
      <h3>{{ userName }}</h3>
      <p>{{ age }}</p>
    </div>
  </section>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const userName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    context.emit('custom-event'); // replaces this.$emit

    const age = inject('userAge');

    return {
      userName,
      age,
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
