<template>
  <div id="app">
    <div class="left" v-if="statusLogin">
      <center>bar</center>
    </div>
    <div class="right">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import AddItem from './components/AddItem.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components: {
    Login: Login,
    AddItem: AddItem
  },
  computed: {
    ...mapGetters(['statusLogin'])
  }
}
</script>

<style>
.left {
  float:left;
  width: 10%;
  background-color: black;
  height: 100vh;
  color: white;
}
.right {
  float:left;
  width: 88%;
  padding-left: 2%;
}
</style>
