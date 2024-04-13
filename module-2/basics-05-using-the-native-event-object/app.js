const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      paragraphClass: "vbind-shorthand",
    };
  },
  computed: {
    fullname: function () {
      console.log("fullname is being computed");
      return !!this.name ? `${this.name} Forero` : "";
    },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    outputFullName() {
      console.log("outputFullName is being executed");
      return !!this.name ? `${this.name} Forero` : "";
    },
  },
  /* 
    To define watchers we define a function with the same name of 
    the variable we want to watch, in this case the <counter> variable */
  watch: {
    counter: function (newValue, oldValue) {
      console.log(
        `The <counter> variable just changed from ${oldValue} to ${newValue}`
      );
    },
  },
});

app.mount("#events");
