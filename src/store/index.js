/* eslint-disable no-undef */
import Vuex from 'vuex'
import axios from 'axios'

const store = new Vuex.Store({
  state: {
    users: [],
    formUser: {
      name: '',
      email: '',
      department: '',
      occupation: '',
      profile_image: '',
      cpf: '',
      role: '',
      active: 1,
    },
  },
  mutations: {
    setFormUser(state, payload) {
      state.formUser[payload.prop] = payload.value
    },
  },
  actions: {
    syncToLocalStore({ state : { formUser, users } }) {
      if(localStorage.getItem('users')) {
        const localStore = JSON.parse(localStorage.getItem('users'))
        localStorage.setItem('users', JSON.stringify([...localStore, formUser]))
      } else {
        localStorage.setItem('users', JSON.stringify([...users, formUser]))
      }
    },
    async setUsers(store) {
      try {
        if(localStorage.getItem('users')) {
          store.state.users = JSON.parse(localStorage.getItem('users'))
        } else {
          const response = await axios.get('https://private-5b8666-testefrontendpc4.apiary-mock.com/users')
          store.state.users = response.data[0].users
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
  modules: {},
  getters: {
    getFormUser: state => state.formUser,
    getUsers: state => state.users,
  }
})

export default store