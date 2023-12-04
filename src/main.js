// src/main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
  render: (h) => h(App),
  router, // Inject the router into the Vue instance
}).$mount('#app');
