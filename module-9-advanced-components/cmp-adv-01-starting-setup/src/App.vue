<template>
  <div>
    <!-- <TheHeader /> -->
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <base-section>
      <p>
        <button @click="setActiveComponent('manage-goals')">
          Manage Goals
        </button>
        <button @click="setActiveComponent('list-goals')">List Goals</button>
      </p>
      <!-- keep-alive stops the dyamic components from being removed and destroyed -->
      <keep-alive>
        <component :is="activeComponent"></component>
      </keep-alive>
    </base-section>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import ListGoals from "./components/ListGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    ListGoals,
    ManageGoals,
  },
  data() {
    return {
      activeComponent: "list-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setActiveComponent(component) {
      this.activeComponent = component;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
