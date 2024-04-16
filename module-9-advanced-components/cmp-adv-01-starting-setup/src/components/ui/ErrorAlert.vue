<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
const ErrorAlert = {};
export default ErrorAlert;
</script>
<style>
dialog {
  position: fixed;
  top: 20vh;
  width: 40%;
  background-color: white;
  box-shadow: 0 2px 8px #ccc;
  margin: auto;
}
</style>
