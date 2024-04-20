<template>
  <p>{{ authText }}</p>
  <button @click="loginUser" v-if="!isAuth">Login</button>
  <button @click="logoutUser" v-if="isAuth">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      isAuth: 'isUserLoggedIn',
      authText: 'userStatusText',
    }),
  },
  methods: {
    ...mapActions(['loginUser', 'logoutUser']),
  },
};
</script>
