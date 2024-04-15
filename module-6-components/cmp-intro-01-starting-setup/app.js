const app = Vue.createApp({
  data() {
    return {
      friendList: [
        {
          id: "jonask",
          name: "Jonas Kahnwald",
          phone: "01234 5678 991",
          email: "jonask@dark.com",
        },
        {
          id: "mnielsen",
          name: "Martha Nielsen",
          phone: "01234 5678 991",
          email: "mnielsen@dark.com",
        },
        {
          id: "btiedemann",
          name: "Bartosz Tiedemann",
          phone: "01234 5678 991",
          email: "btiedemann@dark.com",
        },
      ],
    };
  },
});

// Always use a two word dash-separated identifier
app.component("friend-contact", {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{ showDetails ? 'Hide' : 'Show' }} Details</button>
      <ul v-if="showDetails">
        <li><strong>Phone:</strong>{{ friend.phone }}</li>
        <li><strong>Email:</strong>{{ friend.email }}</li>
      </ul>
    </li>
  `,
  props: { friend: Object },
  data() {
    return {
      showDetails: true,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
});
app.mount("#app");
