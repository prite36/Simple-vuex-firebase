<template>
  <div id="app">
    <div class="left" v-if="statusLogin">
      <router-link to="ShowItem">ShowItem</router-link>
      <router-link to="AddItem">AddItem</router-link>
    </div>
    <div class="right">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import AddItem from './components/AddItem.vue'
import ShowItem from './components/ShowItem.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components: {
    Login: Login,
    AddItem: AddItem,
    ShowItem: ShowItem
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
  background-color: pink;
  height: 100vh;
  color: white;
}
.right {
  float:left;
  width: 88%;
  padding-left: 2%;
}
</style>
