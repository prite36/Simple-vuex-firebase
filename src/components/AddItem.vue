<template>
  <div class="additem">
    <input type="radio" name="typeitem" value="meetingroom" v-model="selectType">
    <label>Meeting Room</label>
    <input type="radio" name="typeitem" value="device" v-model="selectType">
    <label>Device</label>
    <br><br>
    <div class="" v-if="selectType === 'meetingroom'">
      <input type="radio" name="typeroom" value="mediumRoom" v-model="detailRoom.roomSize">
      <label>Medium Room</label>
      <input type="radio" name="typeroom" value="largeRoom" v-model="detailRoom.roomSize">
      <label>Large Room</label>
      <input type="radio" name="typeroom" value="smallRoom" v-model="detailRoom.roomSize">
      <label>Small Room</label>
      <br><br>
      <label>Name Room</label>
      <input type="text" name="" value="" v-model="detailRoom.nameRoom">
      <br><br>
      <input type="button" value="Add Item" name="" @click="addRoom(detailRoom)">
    </div>
    <div class="" v-if="selectType === 'device'">
      <select class="" name="">
        <option value="printer">printer</option>
        <option value="lacercut">lacercut</option>
        <option value="another">another</option>
      </select>
    </div>

  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default{
  name: 'additem',
  data () {
    return {
      selectType: '',
      detailRoom: {
        roomSize: '',
        nameRoom: ''
      }
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['addRoom'])
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
