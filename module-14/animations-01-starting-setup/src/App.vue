<template>
  <div class="container">
    <div :class="{ block: true, animate: addAnimationClass }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return { dialogIsVisible: false, addAnimationClass: false };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.addAnimationClass = true;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* forwards telss CSS we want to keep the last keyframe as the final state of the element */
  animation: slide-fade 0.5s ease forwards;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  50% {
    transform: translateX(-90px) scale(1.5);
  }

  100% {
    transform: translateX(-150px) scale(1.1);
  }
}

/* 
2 steps keyframes 
@keyframse two-step {
  from: {
    transform: translateX(0) scale(1);
  }

  to: {
    transform: translateX(-150px) scale(1.1);
  }
}
*/
</style>
