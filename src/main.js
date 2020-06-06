import Vue from 'vue'
import App from './App.vue'
import VueResouse from 'vue-resource'

Vue.use(VueResouse);

//Custom Directives
Vue.directive('rainbow',{
  bind: function(el,binding,vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

//Custom Filters
Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
})

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...';
})

new Vue({
  el: '#app',
  render: h => h(App)
})
