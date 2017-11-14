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
    statusLogin: false
  },
  getters: {
    statusLogin: state => state.statusLogin
  },
  mutations: {
    updateStatus (state, status) {
      state.statusLogin = status
    }
  },
  actions: {
    signin ({commit}, user) {
      console.log(user)
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
    addItem (payload, detailItem) {
      firebase.database().ref('Item/' + detailItem.typeItem).set({
        nameItem: detailItem.nameItem
      })
    }
  }
})

export default store
