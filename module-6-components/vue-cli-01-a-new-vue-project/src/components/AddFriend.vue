<template>
  <form @submit.prevent="submitFriend">
    <div>
      <label for="name">Name</label>
      <input name="name" id="name" type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input name="phone" id="phone" type="text" v-model="enteredPhone" />
    </div>
    <div>
      <label for="email">Email</label>
      <input name="email" id="email" type="email" v-model="enteredEmail" />
    </div>
    <div><button>Add Friend</button></div>
  </form>
</template>
<script>
const AddFriend = {
  emit: ["add-friend"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitFriend() {
      this.$emit(
        "add-friend",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
export default AddFriend;
</script>
