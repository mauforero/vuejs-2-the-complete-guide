<template>
  <form>
    <label for="goal">Enter Goal</label>
    <input type="text" ref="goalInput" name="goal" id="goal" />
    <button @click.prevent="setGoal">Save Goal</button>
  </form>
  <teleport to="body">
    <error-alert v-if="isInvalid">
      <h2>Invalid Input</h2>
      <p>Pleas enter at least come characters..</p>
      <button @click="clearAlert">OK</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

const ManageGoals = {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      isInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const goal = this.$refs.goalInput.value;
      console.log({ goal });
      if (goal === "") {
        this.isInvalid = true;
      }
    },
    clearAlert() {
      this.isInvalid = false;
    },
  },
};
export default ManageGoals;
</script>
