<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">
      {{ isFavorite ? "Unset" : "Set" }} Favorite
    </button>
    <button @click="toggleDetails">
      {{ showDetails ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong>{{ phone }}</li>
      <li><strong>Email:</strong>{{ email }}</li>
    </ul>
  </li>
</template>
<script>
const FriendContact = {
  /**
   * the following value types (type property) are supported:
   *  String
   *  Number
   *  Boolean
   *  Array
   *  Object
   *  Date
   *  Function
   *  Symbol
   */
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    isFavorite: { type: Boolean, required: false, default: false },
  },
  /**
   * Custom events that this component will emit
   */
  // emits: ['toggle-favorite'],
  emits: {
    // The event depends on id being set to be emitted
    "toggle-favorite": function (id) {
      // Validate the value of id
      if (id) {
        return true;
      } else {
        console.warn("Id is missing");
        return false;
      }
    },
  },
  data() {
    return {
      showDetails: true,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    toggleFavorite() {
      this.isFavoriteFriend = !this.isFavoriteFriend;
      // this.$emit("toggle-favorite");
      this.$emit("toggle-favorite", this.id);
    },
  },
};
export default FriendContact;
</script>
