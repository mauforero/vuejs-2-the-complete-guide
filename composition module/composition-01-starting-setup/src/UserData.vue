<template>
  <section class="container">
    <div>
      <h3>{{ userName }}</h3>
      <p>{{ age }}</p>
    </div>
  </section>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const userName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    context.emit('custom-event'); // replaces this.$emit

    const age = inject('userAge');

    onBeforeMount(function () {
      console.log('onBeforeMount triggered');
    });

    onMounted(function () {
      console.log('onMounted triggered');
    });

    onBeforeUpdate(function () {
      console.log('onBeforeUpdate triggered');
    });

    onUpdated(function () {
      console.log('onUpdated triggered');
    });

    onBeforeUnmount(function () {
      console.log('onBeforeUnmount triggered');
    });

    onUnmounted(function () {
      console.log('onUnmounted triggered');
    });

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
