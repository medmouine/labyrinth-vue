import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Lost from '../views/Lost.vue';
import { hasToken } from '../authentication/authTokenTools';
import Maze from "../components/maze/Maze";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/maze',
    name: 'maze',
    component: Maze,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Signin.vue')
  },
  {
    path: '*',
    name: 'lost',
    component: Lost
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, _, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !hasToken()) {
    next({
      name: 'signin',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
});

export default router;
