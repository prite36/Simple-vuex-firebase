<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
export default {
  name: 'app',
  components: {
    Login: Login
  }
}
</script>

<style>
</style>
