const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      // We access the ref via the $refs special keyword
      textInput = this.$refs.textInput;
      this.message = textInput.value;
    },
  },
  // This lifecycle hook runs before the app is created
  beforeCreate() {
    console.log("beforeCreate has been triggered");
  },
  // This lifecycle hook runs just after the app is created
  created() {
    console.log("create has been triggered");
  },
  // This lifecycle hook is triggered after the app has been created, but before the
  // the app is mounted in the DOM
  beforeMount() {
    console.log("beforeMount has been triggered");
  },
  // This lifecycle hook is triggered after the app has been mounted and it's visible on the screen
  mount() {
    console.log("mount has been triggered");
  },
  // This lifecycle hook is triggered when data has been changed and before changes are reflected in the DOM
  beforeUpdate() {
    console.log("beforeUpdate has been triggered");
  },
  // This lifecycle hook is triggered after the DOM has been updated
  updated() {
    console.log("updated has been triggered");
  },
  // This lifecycle hook is triggered just before the app is unmounted
  beforeUnmount() {
    console.log("beforeUnmount has been triggered");
  },
  // This lifecycle hook is triggered after the app is mounted, after this point the app
  // is completely destroyed
  unmounted() {
    console.log("unmount has been triggered");
  },
});

app.mount("#app");
// Unmount the app after 3 secs to trigger beforeUnmount and unmounted hooks
setTimeout(function () {
  app.unmount();
}, 3 * 1000);

/**
 * Vue's REactivity is based on proxies, which is an object that enables to create
 * a proxy for another object, which can intercept and redefine operations for that object
 */
// longMessage's value depends of the value of message
let message = "Hello";
let longMessage = message + " World";
console.log({ message }, { longMessage });
// However, JS doesn't know that (and doesn't have to) if the value of message changes
// the value of longMessage should be changed
message = "Good Bye";
console.log({ message }, { longMessage });

// A proxy object receives a data object to watch
const data = {
  message: "Hello",
  longMessage: "Hello World!",
};

// It also receives a handler object which defines
// what to do whit that data, for example, when the value of that data is changed
const handler = {
  set(target, key, value) {
    console.log(target, { key }, { value });
    if (key === "message") {
      target.longMessage = value + " World!";
    }
  },
};

const proxy = new Proxy(data, handler);
console.log(proxy.longMessage);
proxy.message = "Good bye";
console.log(proxy.longMessage);
