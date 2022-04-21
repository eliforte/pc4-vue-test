<template>
  <div>
    <table >
      <thead class="header-table">
        <tr v-for="(title, index) in titles" :key="index">
          <th>{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tr-body-container" v-for="(user, index) in users" :key="index">
          <td @click="user.ok = !user.ok" class="box-profile">
            <img :src="user.profile_image" :alt="user.name">
            <div>
              <h3 class="label-mobile" v-if="screen < 425">Nome:</h3>
              <h3>{{ user.name }}</h3>
              <p>{{ user.email }}</p>
            </div>
          </td>
          <td class="box-ocuppation" v-show="user.ok">
            <h3 class="label-mobile" v-if="screen < 425">Cargo:</h3>
            <h3>{{ user.occupation }}</h3>
            <p>{{ user.department }}</p>
          </td>
          <td v-if="user.ok">
            <span :class="user.active ? 'end status active' : 'end status inativo'">{{ user.active ? 'Ativo' : 'Inativo' }}</span>
          </td>
          <td class="end role" v-if="user.ok">{{ user.role }}</td>
          <button class="edit-btn end" v-if="user.ok">Editar</button>
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
      titles: ['Nome', 'Cargo', 'Status', 'Função'],
      users: [],
      loading: false,
      home: true,
      screen: 0,
      ok: false,
    }
  },
  methods: {
    getUsers,
  },
  mounted() {
    this.loading = true
    this.screen = window.screen.width
    this.getUsers()
    if(localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users'))
        .map(user => {
          user.ok = false
          return user
        })
      this.loading = false
    }
  }
}

</script>

<style lang="sass">
@import '../sass/_mixins';


.header-table
  display: flex

  @include mobile-version
    display: none

.tr-body-container
  @include mobile-version
    border: solid 1px #E5E7EB
    grid-template-columns: repeat(3, 1fr)
    padding: 10px 0px  
    display: grid

  .box-profile
    margin: 5px auto
    display: flex
    align-items: center
    grid-column-start: 1
    grid-column-end: 4
    grid-row-start: 1

    img
      width: 150px
      height: 110px
      border-radius: 50%
      padding: 0 .8rem

    div
      display: flex
      flex-wrap: wrap
      justify-content: center

      h3
        margin: auto .2rem
        color: #111827
      
      p
        color: #6B7280
      
      .label-mobile
        color: #656565


  .box-ocuppation
    display: grid
    grid-template-columns: repeat(2, 1fr)
    justify-content: center
    align-items: center
    justify-items: center
    height: 120px
    width: 175px

    h3
      font-size: 1.1rem
      font-weight: bold
      color: #111827
      justify-items: flex-end
      margin: 0
    p
      grid-column-start: 1
      grid-column-end: 4
      font-size: 1rem
      color: #6B7280
      margin: 0

    .label-mobile
      color: #656565

  .status
    border-radius: 4px
    padding: 10px 10px
    margin: 10px 12px
    font-weight: bold

  .active
    color: #065F46
    background-color: #D1FAE5
  
  .inativo
    color: #991B1B
    background-color: #FFE2E3

  .end
    display: flex
    justify-content: center

  .role
    color: #6B7280
    padding: 10px 10px
    margin: 10px 12px

  .edit-btn
    color: #4F46E5
    background: none
    border: solid 1px #4F46E5
    border-radius: 4px
    grid-column-start: 1
    grid-column-end: 4
    padding: 1rem 0

    &:hover
      background: #4F46E5
      color: #fff

</style>
