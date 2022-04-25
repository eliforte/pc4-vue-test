import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import Home from '@/views/Home.vue'
import { createStore } from 'vuex'

const url = 'https://private-5b8666-testefrontendpc4.apiary-mock.com/users'

// const localVue = createLocalVue();
// localVue.use(Vuex);


const mockRequest = [{
  "users": [
    {
      "name": "Amanda",
      "email":"test1@example.com",
      "department":"Sales",
      "occupation":"Account executive",
      "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
      "cpf": 12354367890,
      "role":"Admin",
      "active":1
    },
    {
      "name": "Rodrigo",
      "email":"test2@example.com",
      "department":"Marketing",
      "occupation":"Brand Manager",
      "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
      "cpf": 12354367890,
      "role":"Editor",
      "active":1
    },
  ]
}]

const initalState = {
  users: [...mockRequest[0].users[0]],
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
}

const createVuexStore = (initalState) => {
  createStore({
    state: {
      ...initalState,
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
            const response = await axios.get(url)
            store.state.users = response.data[0].users
          }
        } catch (error) {
          console.log(error)
        }
      },
    },
    mutations: {
      setFormUser(state, payload) {
        state.formUser[payload.prop] = payload.value
      }
    },
  })
}

jest.spyOn(axios, 'get').mockResolvedValue(mockRequest)

describe("Testing store", () => {
  it("should be able to create a store", () => {
    const store = createVuexStore(initalState)
    expect(store).toBeTruthy()
  })

  it("should had a getter for users", () => {
    const store = createVuexStore(initalState)
    expect(store.getters.getUsers).toEqual(initalState.users)
  })

  it("should had a getter for formUser", () => {
    const store = createVuexStore(initalState)
    expect(store.getters.getFormUser).toEqual(initalState.formUser)
  })

  it("should had a mutation for setFormUser", () => {
    const store = createVuexStore(initalState)
    store.commit('setFormUser', { prop: 'name', value: 'Rodrigo' })
    expect(store.state.formUser.name).toEqual('Rodrigo')
  })

  it("should had a action for syncToLocalStore", () => {
    const store = createVuexStore(initalState)
    store.commit('setFormUser', { prop: 'name', value: 'Rodrigo' })
    store.dispatch('syncToLocalStore')
    expect(localStorage.getItem('users')).toEqual(JSON.stringify([...initalState.users, initalState.formUser]))
  })
})
  

describe("Testing component Home", () => {

  it("should render 'th' with texts 'NAME', 'CARGO', 'STATUS' e 'FUNÇÃO'", () => {
    const wrapper = mount(Home)
    expect(wrapper.find('th').text()).toBe('NAME')
    expect(wrapper.find('th').text()).toBe('CARGO')
    expect(wrapper.find('th').text()).toBe('STATUS')
    expect(wrapper.find('th').text()).toBe('FUNÇÃO')
  })

  it("should render 'td' with texts 'Amanda', 'Sales', 'Ativo', 'Admin' and 'Editar'", async () => {
    const wrapper = mount(Home)

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(url)

    await flushPromises()

    const td = wrapper.findAll('td')

    expect(td.at(0).text()).toBe('Amanda')
    expect(td.at(0).text()).toBe('Sales')
    expect(td.at(0).text()).toBe('Ativo')
    expect(td.at(0).text()).toBe('Admin')
    expect(td.at(0).text()).toBe('Editar')
  })
  
  it("should render 'p' with text 'test1@example.com'", async () => {
    const wrapper = mount(Home)

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(url)

    await flushPromises()

    const p = wrapper.findAll('p')

    expect(p.at(0).text()).toBe('test1@example.com')
  })

  it("should render 'p' with text 'Account executive'", async () => {
    const wrapper = mount(Home)

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(url)

    await flushPromises()

    const p = wrapper.findAll('p')

    expect(p.at(1).text()).toBe('Account executive')
  })

  it("should render 'button' with text 'Novo' and after click redirect to path '/create'", () => {
    const wrapper = mount(Home)

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(url)

    const button = wrapper.find('button')

    button.trigger('click')

    expect(wrapper.vm.$route.path).toBe('/create')
  })
})