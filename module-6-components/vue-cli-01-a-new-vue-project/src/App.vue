<template>
  <h2>Friend List</h2>
  <add-friend @add-friend="addFriend"></add-friend>
  <ul>
    <friend-contact
      v-for="friend in friendList"
      :key="friend.id"
      v-bind="friend"
      @toggle-favorite="favoriteWasToggled"
    ></friend-contact>
  </ul>
</template>

<script>
const app = {
  data() {
    return {
      friendList: [
        {
          id: "jonask",
          name: "Jonas Kahnwald",
          phone: "01234 5678 991",
          email: "jonask@dark.com",
          isFavorite: false,
        },
        {
          id: "marthanielsen",
          name: "Martha Nielsen",
          phone: "01234 5678 991",
          email: "mnielsen@dark.com",
          isFavorite: false,
        },
        {
          id: "btiedemann",
          name: "Bartosz Tiedemann",
          phone: "01234 5678 991",
          email: "btiedemann@dark.com",
          isFavorite: false,
        },
        {
          id: "mnielsen",
          name: "Mikel Nielsen",
          phone: "0001 234 56789",
          email: "mnielsen@dark.com",
          isFavorite: true,
        },
      ],
    };
  },
  methods: {
    favoriteWasToggled(friendId) {
      const friend = this.friendList.find((friend) => friend.id === friendId);
      friend.isFavorite = !friend.isFavorite;
    },
    addFriend(name, phone, email) {
      const newFriend = {
        id: name.toLowerCase().replace(" ", "-"),
        name,
        phone,
        email,
        isFavorite: false,
      };
      this.friendList.push(newFriend);
    },
  },
};

export default app;
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
