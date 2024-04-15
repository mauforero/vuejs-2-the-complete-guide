<template>
  <form @submit.prevent="setUserData">
    <div>
      <label for="username">Name</label>
      <input name="username" id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="age">Age</label>
      <input name="age" id="age" type="text" v-model="age" />
    </div>
    <button>Set User Data</button>
  </form>
</template>

<script>
const UserData = {
  emits: ["set-user-data"],
  data() {
    return {
      username: "",
      age: "",
    };
  },
  methods: {
    setUserData() {
      this.$emit("set-user-data", {
        username: this.username,
        age: parseInt(this.age),
      });
      this.username = "";
      this.age = "";
    },
  },
};
export default UserData;
</script>
