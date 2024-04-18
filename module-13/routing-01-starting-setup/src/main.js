import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';
import NotFound from './components/layout/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList, alias: '/' },
    // props: true will pass the param :teamId as a prop to the TeamMembers component
    { path: '/teams/:teamId', component: TeamMembers, props: true },
    { path: '/users', component: UsersList },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);
app.use(router);
app.mount('#app');
