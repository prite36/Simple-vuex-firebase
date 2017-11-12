<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import AddItem from './components/AddItem.vue'
export default {
  name: 'app',
  components: {
    Login: Login,
    AddItem: AddItem
  }
}
</script>

<style>
</style>
