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
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    signin (payload, user) {
      console.log(payload)
      console.log(user.email)
      console.log(user.password)
      firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(
        (user) => {
          router.replace('AddItem')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    }
  }
})

export default store
