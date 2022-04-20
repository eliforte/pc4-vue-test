<template>
  <div>
    <table>
      <thead>
        <tr v-for="(title, index) in titles" :key="index">
          <th>{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>
            <img :src="user.profile_image" :alt="user.name">
            <div>
              <h3>{{ user.name }}</h3>
              <p>{{ user.email }}</p>
            </div>
          </td>
          <td>
            <h3>{{ user.occupation }}</h3>
            <p>{{ user.department }}</p>
          </td>
          <td v-if="user.active">Ativo</td>
          <td v-else>Inativo</td>
          <td>{{ user.role }}</td>
          <button>Editar</button>
        </tr>
      </tbody>
    </table>
    <ButtonForm :typeButton="home"/>
  </div>
</template>

<script>
import getUsers from '../service/api'
import ButtonForm from '../components/Button.vue'

export default {
  name: 'HomePage',
  components: {
    ButtonForm,
  },
  data() {
    return {
      titles: ['Name', 'Price', 'Description'],
      users: [],
      loading: false,
      home: true,
    }
  },
  methods: {
    getUsers
  },
  mounted() {
    this.loading = true
    this.getUsers()
    if(localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users'))
      this.loading = false
    }
  }
}

</script>

<style lang="scss">
  @use 'globalStyles'
  
  
</style>
