<template>
  <div class="additem">
    <label>Meeting Room</label>
    <input type="radio" name="typeitem" value="meetingroom" v-model="detailItem.typeItem">
    <label>Device</label>
    <input type="radio" name="typeitem" value="device" v-model="detailItem.typeItem">
    <br><br>
    <label>Name</label>
    <input type="text" name="" value="" v-model="detailItem.nameItem">
    <input type="button" value="Add Item" name="" @click="addItem(detailItem)">
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
  name: 'additem',
  data () {
    return {
      detailItem: {
        typeItem: '',
        nameItem: ''
      }
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['addItem'])
  }
}
</script>

<style scoped>
.left {
  width: 20%;
  padding-left: 1%;
  padding-top: 1%;
  float:left;
}
</style>
