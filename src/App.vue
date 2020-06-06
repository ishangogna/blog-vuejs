<template>
<div>
  <app-header></app-header>
  <router-view></router-view>

</div>
  
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import appHeader from './components/header'

export default {
  components:{
    'add-blog':addBlog,
    'show-blogs': showBlogs,
    'app-header': appHeader,
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
