<template>
  <section>
    <ul>
      <product-item
        v-for="prod in products"
        :key="prod.id"
        v-bind="prod"
      ></product-item>
    </ul>
  </section>
</template>

<script>
// import { toRaw } from 'vue';
import ProductItem from '../components/products/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  computed: {
    products: function () {
      return this.$store.getters['product/getProductList'];
    },
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
