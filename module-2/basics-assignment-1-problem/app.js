const app = Vue.createApp({
  data() {
    return {
      name: "Mauricio Forero",
      age: 37,
      imageSrc:
        "https://vue.gallerycdn.vsassets.io/extensions/vue/volar/2.0.12/1712741979468/Microsoft.VisualStudio.Services.Icons.Default",
    };
  },
  methods: {
    ageInFiveYears() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.floor(Math.random() * 100);
    },
  },
});

app.mount("#assignment");
