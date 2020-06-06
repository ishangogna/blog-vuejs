import Vue from 'vue'
import App from './App.vue'
import VueResouse from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'


// Using vue-resourse package for making HTTP Requests
Vue.use(VueResouse);

// Using vue-router package to set up routing
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: 'history',


});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router

})
