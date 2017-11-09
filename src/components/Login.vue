<template>
  <div class="login">
    <input type="button" name="" value="+" @click="add">
    {{count}}
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default{
  name: 'Login',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    ...mapActions(['add'])
  }
}
</script>

<style scoped>

</style>
