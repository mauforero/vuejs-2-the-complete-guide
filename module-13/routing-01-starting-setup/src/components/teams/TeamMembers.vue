<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2" id="go-teams-2">Go to team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],
  props: ['teamId'],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMembers() {
      const team = this.teams.find((team) => team.id === this.teamId);
      this.teamName = team.name;
      this.members = this.users.filter((user) =>
        team.members.includes(user.id)
      );
    },
  },
  created() {
    this.loadTeamMembers();
    console.log(this.$route.query);
  },
  watch: {
    // We watch the route to reload teamMembers when #go-teams-2 is clicked
    $route(newRoute) {
      // Prevent undefined error
      if (!newRoute.params.teamId) return;
      this.loadTeamMembers();
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
