const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      selectedBoxes: {
        A: false,
        B: false,
        C: false,
      },
    };
  },
  computed: {
    boxCClasses: function () {
      return { selected: this.selectedBoxes.C };
    },
  },
  methods: {
    toggleBoxSelection(index) {
      this.selectedBoxes[index] = !this.selectedBoxes[index];
    },
  },
});
app.mount("#styling");
