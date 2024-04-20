<template>
  <section>
    <ul>
      <product-item
        v-for="prod in getProductList"
        :key="prod.id"
        v-bind="prod"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductItem from '../components/products/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters('product', ['getProductList']),
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
