import { createApp } from "vue";
import App from "./App";
import FriendContact from "./components/FriendContact.vue";
import AddFriend from "./components/AddFriend.vue";

const app = createApp(App);
app.component("friend-contact", FriendContact);
app.component("add-friend", AddFriend);
app.mount("#app");
