// src/router.js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/HelloWorld'),
  },
  {
    path: '/form-input',
    name: 'Home',
    component: () => import('./components/InputForm'),
  },
  // Add more routes as needed
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
