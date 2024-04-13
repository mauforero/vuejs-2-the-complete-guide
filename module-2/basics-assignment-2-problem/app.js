const app = Vue.createApp({
  data() {
    return {
      alertMessage: "You have successfully set an alert",
      keyupOutput: "",
      keydownEnterOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.alertMessage);
    },
    setKeyupOutput(event) {
      this.keyupOutput = event.target.value;
    },
    setKeydownEnterOutput(event) {
      this.keydownEnterOutput = event.target.value;
    },
  },
});
app.mount("#assignment");
