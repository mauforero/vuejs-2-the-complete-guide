const app = Vue.createApp({
  data() {
    return {
      userClass: "",
      backgroundColor: "",
      showParagraph: true,
    };
  },
  computed: {
    paragraphClasses: function () {
      return {
        user1: this.userClass === "user1",
        user2: this.userClass === "user2",
        visible: this.showParagraph,
        hidden: !this.showParagraph,
      };
    },
    userBackgroundColor: function () {
      return this.backgroundColor !== "" ? this.backgroundColor : "#8ddba4";
    },
  },
  methods: {
    setClass(event) {
      this.userClass = event.target.value;
    },
    setBackgroundColor(event) {
      this.backgroundColor = event.target.value;
    },
    toggleParagraph() {
      this.showParagraph = !this.showParagraph;
      console.log(`this.showParagraph: ${this.showParagraph}`);
    },
  },
});
app.mount("#assignment");
