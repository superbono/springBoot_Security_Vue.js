import Vue from 'vue';
import Router from 'vue-router';
import LoginViewPage from '../views/LoginViewPage';
import JoinViewPage from '../views/JoinViewPage';
import MainViewPage from '../views/MainViewPage';
import store from '../store';
import { getUserFromCookie } from '../utils/cookies.js';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewPage,
      beforeEnter(to, from, next) {
        store.getters['isLoggedIn'] ? next('/main') : next();
      },
    },
    {
      path: '/join',
      name: 'signup',
      component: JoinViewPage,
    },
    {
      path: '/main',
      name: 'main',
      component: MainViewPage,
      beforeEnter,
    },
  ],
});

function beforeEnter(to, from, next) {
  if (store.getters['isLoggedIn'] || getUserFromCookie()) {
    next();
  } else {
    alert('sign in please');
    next('/login');
  }
}
