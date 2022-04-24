<template>
  <div class="home-container">
    <table >
      <thead class="header-table">
        <tr v-for="(title, index) in titles" :key="index">
          <th :class="title.class">{{ title.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tr-body-container" v-for="(user, index) in getUsers" :key="index">
          <td @click="user.ok = !user.ok" class="box-profile">
            <img :src="user.profile_image" :alt="user.name">
            <div>
              <h3 class="label-mobile" v-if="screen < 425">Nome:</h3>
              <h3>{{ user.name }}</h3>
              <p>{{ user.email }}</p>
            </div>
          </td>
          <td class="box-ocuppation" v-show="user.ok || screen > 425">
            <h3 class="label-mobile" v-if="screen < 425">Cargo:</h3>
            <h3>{{ user.occupation }}</h3>
            <p>{{ user.department }}</p>
          </td>
          <td class="end" v-if="user.ok || screen > 425">
            <span :class="user.active ? 'end status active' : 'end status inativo'">{{ user.active ? 'Ativo' : 'Inativo' }}</span>
          </td>
          <td class="end role" v-if="user.ok || screen > 425">{{ user.role }}</td>
          <td class="edit-btn end" v-if="user.ok || screen > 425">Editar</td>
        </tr>
      </tbody>
      <ButtonForm :homeButton="homeButton"/>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import ButtonForm from '../components/Button.vue'

export default {
  name: 'HomePage',
  components: {
    ButtonForm,
  },
  data() {
    return {
      titles: [{
        name: 'NOME',
        class: 'th-name',
      }, {
        name: 'CARGO',
        class: 'th-ocuppation',
      }, {
        name: 'STATUS',
        class: 'th-status',
      }, {
        name: 'FUNÇÃO',
        class: 'th-role',
      }],
      loading: false,
      homeButton: true,
      screen: 0,
      ok: false,
    }
  },
  computed: {
    ...mapGetters(['getUsers']),
  },
  methods: {
    ...mapMutations(['setUsers']),
    ...mapActions(['setUsers']),
  },
  mounted() {
    this.loading = true
    this.screen = window.screen.width
    this.setUsers()
  }
}

</script>

<style lang="sass">
@import '../sass/_mixins';

.home-container
  height: 100%
  width: 100%

  table
    padding: 30px 0
    border: 1px solid #F9FAFB
    border-radius: 10px
    margin: 97px 217px
    background-color: #fff
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);

    @include mobile-version
      margin: 0

.header-table
  color: #6B7280
  grid-template-columns: repeat(4, 1fr)
  margin: 0 25px
  width: 90%
  height: 50px
  display: grid
  align-items: center
  justify-content: space-around

  tr
    width: 70px

  @include mobile-version
    display: none
    width: 100%

  .th-role
    

  th
    grid-template-columns: repeat(3, 1fr)

.tr-body-container
  align-items: center
  border: solid 1px #E5E7EB
  display: grid
  grid-template-columns: repeat(5, 1fr)
  justify-items: center
  width: 100%
  
  @include mobile-version
    grid-template-columns: repeat(3, 1fr)
    margin: 0
    width: 100%
    height: 100%

  td
    margin: 20px 0
    height: 70px
    width: 100%
    display: flex

    @include mobile-version
      margin: 20px 0
      height: 100%
      width: 100%

.box-profile
  padding-left: 40px
  width: 200px
  height: 70px
  display: flex
  align-items: center
  grid-column-start: 1
  grid-column-end: 2

  @include mobile-version
    padding-left: 30px
    grid-column-end: 4

  img
    width: 40px
    height: 40px
    border-radius: 50%
    
    @include mobile-version
      width: 170px
      height: 120px

  div
    display: flex
    flex-direction: column
    flex-wrap: wrap
    justify-content: center

    @include mobile-version
      flex-direction: row

    h3
      margin: auto 10px
      color: #111827
      font-size: 19px
    
    p
      color: #6B7280
      margin: .1rem 10px
      font-size: 15px
      

.box-ocuppation
  align-items: flex-start;
  display: flex
  flex-direction: column
  justify-content: center
  grid-column-start: 2
  grid-column-end: 3

  @include mobile-version
    grid-column-start: 1
    flex-direction: row
    flex-wrap: wrap
    padding-left: 100px
    align-items: center
    align-content: center
      
  h3
    margin: 0
    color: #111827
    font-size: 19px

    @include mobile-version
      margin: auto 10px
  p
    margin: auto 10px
    margin: 0

span
  margin: 15px 60px 
  align-items: center
  padding: 10px 14px 10px 11px

.status
  height: 16px
  width: 40px
  border-radius: 4px
  font-weight: 16.41px

.active
  padding: 10px 5px 10px 11px
  color: #065F46
  background-color: #D1FAE5
  
.inativo
  padding: 10px 14px 10px 11px
  color: #991B1B
  background-color: #FFE2E3

.end
  justify-content: space-around
  align-self: center
  size: 14px

  @include mobile-version
    grid-row-start: 3

.role
  width: 40px
  align-items: center
  color: #6B7280
  font-weight: 16.41px

  @include mobile-version
    grid-row-start: 3

.edit-btn
  width: 40px
  align-items: center
  color: #4F46E5
  font-weight: 16.41px
  size: 14px

  @include mobile-version
    grid-row-start: 3

</style>
