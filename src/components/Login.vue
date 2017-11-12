<template>
  <div class="login">
    <center>
      <input type="text" name="" value="" v-model="user.email">
      <input type="password" name="" value="" v-model="user.password">
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
