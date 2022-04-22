<template>
  <div class="home-container">
    <table >
      <thead class="header-table">
        <tr v-for="(title, index) in titles" :key="index">
          <th>{{ title }}</th>
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
      titles: ['Nome', 'Cargo', 'Status', 'Função'],
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

// .home-container
//   height: 100%
//   width: 100%

//   table
//     margin: 97px 217px
//     @include mobile-version
//       margin: auto auto

// .header-table
//   width: 67%
//   margin-left: 10%
//   height: 50px
//   display: flex
//   align-items: center
//   justify-content: space-evenly

//   th
//     grid-template-columns: repeat(5, 1fr)
//     width: 150px

//   @include mobile-version
//     display: none

// .tr-body-container
//   margin: 0 10%
//   align-items: center
//   width: 80%
//   display: grid
//   grid-template-columns: repeat(5, 1fr)
//   border: solid 1px #E5E7EB
  
//   @include mobile-version
//     margin: 0
//     width: 100%
//     height: 100%

//   td
//     margin: 0
//     height: 70px
//     display: flex
  
// .box-profile
//   padding: 0 40px
//   width: 200px
//   height: 70px
//   display: flex
//   align-items: center

//   img
//     width: 40px
//     height: 40px
//     border-radius: 50%
  
//   div
//     display: flex
//     flex-direction: column
//     flex-wrap: wrap
//     justify-content: center

//     h3
//       margin: auto 10px
//       color: #111827
//       font-size: 19px
    
//     p
//       color: #6B7280
//       margin: .1rem 10px
//       font-size: 15px
      

// .box-ocuppation
//   display: flex
//   flex-direction: column
//   align-items: flex-start;
//   flex-wrap: wrap
//   justify-content: center;

//   h3
//     margin: 0
//     color: #111827
//     font-size: 19px
//   p
//     margin: 0

// span
//   margin: 40px
//   align-items: center
//   padding: 10px 14px 10px 11px

// .status
//   height: 16px
//   width: 40px
//   border-radius: 4px
//   font-weight: 16.41px

// .active
//   color: #065F46
//   background-color: #D1FAE5
  
// .inativo
//   color: #991B1B
//   background-color: #FFE2E3

// .end
//   align-self: center
//   size: 14px

// .role
//   width: 40px
//   align-items: center
//   color: #6B7280
//   font-weight: 16.41px

// .edit-btn
//   width: 40px
//   align-items: center
//   color: #4F46E5
//   font-weight: 16.41px
//   size: 14px

//   @include mobile-version
//     grid-template-columns: repeat(3, 1fr)
//     padding: 10px 0px  

//     .box-profile
//       margin: 5px auto
//       grid-column-start: 1
//       grid-column-end: 4
//       grid-row-start: 1

//       img
//         width: 150px
//         height: 110px
//         padding: 0 .8rem

//       div
//         flex-direction: row

//         h3
//           margin: auto .2rem
        
//         p
//           margin: auto .2rem
//           color: #6B7280
        
//         .label-mobile
//           color: #656565


//     .box-ocuppation
//       display: grid
//       grid-template-columns: repeat(2, 1fr)
//       justify-content: center
//       align-items: center
//       justify-items: center
//       height: 120px
//       width: 175px
//       animation: showContainer 200ms linear alternate-reverse

//       @keyframes showContainer 
//         to
//           transform: translateY(-20px)
//           opacity: 0.1
//         from
//           transform: translateY(0)
//           opacity: 1

//       h3
//         font-size: 1.1rem
//         font-weight: bold
//         color: #111827
//         justify-items: flex-end
//         margin: 0
//       p
//         grid-column-start: 1
//         grid-column-end: 4
//         font-size: 1rem
//         color: #6B7280
//         margin: 0

//       .label-mobile
//         color: #656565

//     .status
//       border-radius: 4px
//       padding: 10px 10px
//       margin: 10px 12px
//       font-weight: bold

//     .active
//       color: #065F46
//       background-color: #D1FAE5
    
//     .inativo
//       color: #991B1B
//       background-color: #FFE2E3

//     .end
//       display: flex
//       justify-content: center
//       animation: showContainer 200ms linear alternate-reverse

//     .role
//       color: #6B7280
//       padding: 10px 10px
//       margin: 10px 12px

//     .edit-btn
//       color: #4F46E5
//       background: none
//       border: solid 1px #4F46E5
//       border-radius: 4px
//       grid-column-start: 1
//       grid-column-end: 4
//       padding: 1rem 0

//       &:hover
//         background: #4F46E5
//         color: #fff

</style>
