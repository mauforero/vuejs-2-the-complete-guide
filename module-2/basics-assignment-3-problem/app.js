const app = Vue.createApp({
  data() {
    return {
      result: 0,
      timeOutId: 0,
    };
  },
  computed: {
    resultCaption: function () {
      return this.result < 37 ? "Not there yet" : "Too much!";
    },
  },
  methods: {
    addNumber(number) {
      clearTimeout(this.timeOutId);
      this.result += number;
      console.log(`result: ${this.result}`);
    },
  },
  watch: {
    result: function () {
      if (this.result > 0) {
        this.timeOutId = setTimeout(() => {
          console.log("Resetting counter to 0.");
          this.result = 0;
        }, 5 * 1000);
      }
    },
  },
});
app.mount("#assignment");
