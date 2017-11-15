<template>
  <div class="showitem">
    <div class="" v-for="(typeitem, key1) in items">
      <h1>{{key1}}</h1>
      <br>
      <div class="" v-for="(item, key2) in typeitem">
        <br>
        <div class="" v-for="(size, key3) in item">
          <div class="" v-for="(name, key4) in size">
            <h3>{{key2}}</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{key3}}
            <input type="button" value="Delete" name="" @click="removeItem((key1 + '/' + key2 + '/' + key3))">
            <br><br>
          </div>
        </div>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default{
  name: 'ShowItem',
  computed: {
    ...mapGetters(['items']),
    ...mapActions(['getItem'])
  },
  methods: {
    ...mapActions(['removeItem'])
  }
}
</script>

<style scoped>

</style>
