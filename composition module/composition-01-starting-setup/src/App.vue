<template>
  <section class="container">
    <h2>{{ userFirstName }} {{ userMiddleName }} {{ userLastName }}</h2>
    <h3>
      {{ anotherUser.firstName }} {{ anotherUser.lastName }} -
      {{ anotherUser.age }}
    </h3>
    <button @click="updateAge">Update Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="enteredName" />
      <input type="text" placeholder="Last Name" v-model="enteredLastName" />
      <p>Entered name: {{ enteredName }} {{ enteredLastName }}</p>
    </div>
    <div>Computed name: {{ computedName }}</div>
  </section>
</template>

<script>
// ref creates reactive variables that can be used along the component
import { computed, reactive, ref, watch } from 'vue';

export default {
  setup() {
    // These variables can't be accessed by the component unless they are returned
    const middleName = ref('David');
    let firstName = 'Andres';
    let lastName = 'Forero';

    // Directly modifying these variables won't work since setup() is only run once
    // and they won't be 'available' anymore
    setTimeout(function () {
      firstName = 'Pepito';
      lastName = 'Perez';
    }, 2 * 1000);

    // To make it work we access the value property from the variable we declared with ref
    // firstName and lastName changes won't be reflected on the template
    setTimeout(function () {
      firstName = 'Juancho';
      middleName.value = 'Mauricio';
      lastName = 'Polo';
    }, 3 * 1000);

    // We also have reactive objects
    const user = reactive({
      firstName: 'Juancho',
      lastName: 'Polo',
      age: 37,
    });

    setTimeout(function () {
      user.firstName = 'Pepito';
      user.lastName = 'Perez';
    }, 2 * 1000);

    // How to replace methods: simply declare a function and expose it
    function updateAge() {
      user.age++;
    }

    // Two way binding (v-model)
    const enteredName = ref('');
    const enteredLastName = ref('');

    // computed variables
    const computedName = computed(function () {
      return middleName.value + ' ' + lastName;
    });

    // watch expects as parameters what to watch nad the function to execute
    watch(enteredLastName, function (newVal, oldVal) {
      console.log('enteredLastName has changed from', oldVal, 'to', newVal);
    });

    // We return an object that will be exposed to the component
    return {
      userFirstName: firstName,
      userMiddleName: middleName,
      userLastName: lastName,
      anotherUser: user,
      updateAge,
      enteredName,
      enteredLastName,
      computedName,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
