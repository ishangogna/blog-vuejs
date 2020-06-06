<template>
  <add-blog></add-blog>
</template>

<script>
import addBlog from './components/addBlog.vue'
export default {
  components:{
    'add-blog':addBlog,
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
