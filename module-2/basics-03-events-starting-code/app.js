const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      formName: "",
      fullName: "",
    };
  },
  methods: {
    add(number = 1) {
      this.counter = this.counter + number;
    },
    reduce(number = 1) {
      this.counter = this.counter - number;
    },
    setName(event) {
      this.name = event.target.value;
    },
    setFullName(lastName) {
      this.fullName = `${this.formName} ${lastName}`;
    },
  },
});

app.mount("#events");
