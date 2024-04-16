import { createApp } from "vue";

import App from "./App.vue";

import BaseBadge from "./components/BaseBadge.vue";
import BaseSection from "./components/BaseSection.vue";

const app = createApp(App);

app.component("base-badge", BaseBadge);
app.component("base-section", BaseSection);

app.mount("#app");
