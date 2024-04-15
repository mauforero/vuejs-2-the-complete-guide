<template>
  <h1>Components Task</h1>
  <section>
    <active-user v-bind="user"></active-user>
    <user-data @set-user-data="setUserData"></user-data>
  </section>
</template>
<script>
const App = {
  data() {
    return {
      user: {
        username: "Mauricio Forero",
        age: 37,
      },
    };
  },
  methods: {
    setUserData(userData) {
      this.user = userData;
    },
  },
};

export default App;
</script>

<style>
section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  max-width: 40rem;
  margin: auto;
  gap: 1rem;

  & > div,
  form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
  }

  div {
    flex-grow: 1;
  }
}

h1 {
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

form div {
  margin: 1rem 0;
}

input {
  font: inherit;
  padding: 0.15rem;
}

label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
