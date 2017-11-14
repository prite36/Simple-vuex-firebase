<template>
  <div id="app">
    <div class="left" v-if="statusLogin">
      hello
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
}
.right {
  float:left;
  width: 90%;
}
</style>
