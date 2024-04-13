const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      showList: true,
      tasks: [],
    };
  },
  computed: {
    toggleButtonCaption: function () {
      return this.showList ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.enteredTask !== "" && this.tasks.push(this.enteredTask);
      this.enteredTask = "";
    },
    toggleListVisibility() {
      this.showList = !this.showList;
    },
  },
});
app.mount("#assignment");
