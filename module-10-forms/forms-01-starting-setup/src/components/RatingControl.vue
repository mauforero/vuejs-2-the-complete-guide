<template>
  <ul>
    <li :class="{ active: modelValue === 'Poor' }">
      <button @click="setActiveOption('Poor')" type="button">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'Average' }">
      <button @click="setActiveOption('Average')" type="button">Average</button>
    </li>
    <li :class="{ active: modelValue === 'Excellent' }">
      <button @click="setActiveOption('Excellent')" type="button">
        Excellent
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  /**
   * Using v-model on a custom control component
   * When binding v-model on a custom component Vue "injects" a prop called modelValue
   * and expects the component to emit the event update:modelValue
   */
  props: ['modelValue'],
  emit: ['update:modelValue'],
  methods: {
    setActiveOption(option) {
      this.activeOption = option;
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0.5rem 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  background-color: transparent;
  font: inherit;
  cursor: pointer;
  border: 0;
}

.active {
  border-color: rebeccapurple;
}
</style>
