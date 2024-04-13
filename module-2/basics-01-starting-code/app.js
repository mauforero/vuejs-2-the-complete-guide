const app = Vue.createApp({
  data: function () {
    return {
      goalTitle: "My Course Goal",
      courseGoalA: "Finish the course and become a Vue PRO!",
      courseGoalB: "<h3>Finish the course and master Vue!!!<h3>",
      vueLink: {
        href: "https://vuejs.org",
        target: "_blank",
      },
    };
  },
  methods: {
    outputGoal() {
      const number = Math.random();
      if (number < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
app.mount("#user-goal");
