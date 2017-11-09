import Vue from 'vue'
import firebase from 'firebase'
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
    count: 0
  },
  getters: {
    count: state => state.count
  },
  mutations: {
    add (state) {
      state.count += 1
    }
  },
  actions: {
    add ({commit}) {
      commit('add')
    }
  }
})

export default store
