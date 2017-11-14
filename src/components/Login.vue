<template>
  <div class="login">
    <center>
      <input type="text" name="" placeholder="email" v-model="user.email">
      <br><br>
      <input type="password" name="" placeholder="password" v-model="user.password">
      <br><br>
      <button type="button" name="button" @click="signin(user)">Sign in</button>
    </center>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['signin'])
  }
}
</script>

<style scoped>

</style>
