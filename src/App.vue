<template>
  <test-component></test-component>
</template>

<script>
import Test from './components/test'
export default {
  components:{
    'test-component':Test,
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
