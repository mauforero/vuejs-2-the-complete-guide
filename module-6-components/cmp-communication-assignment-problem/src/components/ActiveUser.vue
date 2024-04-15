<template>
  <div>
    <h2>{{ username }}</h2>
    <h3>Age: {{ age }} years</h3>
  </div>
</template>
<script>
const ActiveUser = {
  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
export default ActiveUser;
</script>
