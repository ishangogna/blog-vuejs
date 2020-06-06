import Vue from 'vue'
import App from './App.vue'
import VueResouse from 'vue-resource'

Vue.use(VueResouse);

new Vue({
  el: '#app',
  render: h => h(App)
})
