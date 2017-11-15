import Vue from 'vue'
import firebase from 'firebase'
import router from '../router'
import Vuex from 'vuex'
Vue.use(Vuex)
let config = {
  apiKey: 'AIzaSyAE2rQQye4hlRpDqAWirvyaaCExiaWA8DY',
  authDomain: 'fitm-coworkingspace.firebaseapp.com',
  databaseURL: 'https://fitm-coworkingspace.firebaseio.com',
  projectId: 'fitm-coworkingspace',
  storageBucket: 'fitm-coworkingspace.appspot.com',
  messagingSenderId: '181239315787'
}
firebase.initializeApp(config)

const store = new Vuex.Store({
  strict: true,
  state: {
    statusLogin: false,
    items: ''
  },
  getters: {
    statusLogin: state => state.statusLogin,
    items: state => state.items
  },
  mutations: {
    updateStatus (state, status) {
      state.statusLogin = status
    },
    getItem (state, items) {
      console.log(items)
      state.items = items
    }
  },
  actions: {
    signin ({commit}, user) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(
        (user) => {
          router.replace('AddItem')
          commit('updateStatus', true)
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    },
    addRoom (payload, detailRoom) {
      firebase.database().ref('Item/meetingroom/').child(detailRoom.sizeRoom).child(detailRoom.nameRoom).set({
        status: 'open'
      })
    },
    addDevice (payload, detailDevice) {
      firebase.database().ref('Item/Device/').child(detailDevice.typeDevice).child(detailDevice.nameDevice).set({
        status: 'open'
      })
    },
    getItem ({commit}) {
      firebase.database().ref('Item').on('value', function (snapshot) {
        commit('getItem', snapshot.val())
      })
    },
    removeItem (payload, child) {
      firebase.database().ref('Item/' + child).remove()
    }
  }
})

export default store
