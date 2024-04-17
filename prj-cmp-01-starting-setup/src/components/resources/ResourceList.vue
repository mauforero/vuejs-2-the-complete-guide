<template>
  <ul>
    <resource-item
      v-for="resource in getResources()"
      :key="resource.id"
      v-bind="resource"
    ></resource-item>
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue';

export default {
  inject: ['getResources'],
  components: {
    ResourceItem,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
