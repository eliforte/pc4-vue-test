/* eslint-disable no-undef */
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    users: [],
    formUser: {
      name: '',
      email: '',
      occupation: '',
      department: '',
      role: '',
    },
  },
  mutations: {
    setFormUser(state, payload) {
      state.formUser[payload.prop] = payload.value
    },
  },
  actions: {
    syncToLocalStore(store) {
      localStorage.setItem('users', JSON.stringify(store.formUser))
    },
  },
  modules: {},
  getters: {
    getFormUser: state => state.formUser,
  }
})

export default store