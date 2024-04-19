import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';
import NotFound from './components/layout/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      alias: '/',
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    // props: true will pass the param :teamId as a prop to the TeamMembers component
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter: function (to, from, next) {
        console.log('users route beforeEnter');
        to;
        from;
        next();
      },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior: function (to, from, savedPosition) {
    to;
    from;
    savedPosition;
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

// Navigation guards that run before each route is loaded
router.beforeEach(function (to, from, next) {
  console.log('Global router beforeEach');
  to;
  from;
  // If empty confirm the navigation
  next();
});

// Navigation guards that run after each route is loaded
router.afterEach(function (to, from) {
  console.log('Global router afterEach');
  to;
  from;
});

const app = createApp(App);
app.use(router);
app.mount('#app');
