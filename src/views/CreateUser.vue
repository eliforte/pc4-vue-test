<template>
  <div class="form-container">
    <H3>CADASTRAR NOVO USUÁRIO</h3>
    <hr v-show="scree > 425">
    <label class="user-container">
      <span class="title-user-picture">Foto</span>
      <div class="image-container">
        <img src="../assets/profile.svg" alt="teste">
        <button>Modificar</button>
      </div>
    </label>
    <form autocomplete="off" >
        <div class="inputs-container">
          <label class="input-form-label" for="name">
            <span>Nome</span>
            <input
              @blur="getFormUser.name.length <= 3 ? erroName = 'erro' : erroName = 'ok'"
              :model-value="getFormUser.name"
              @change="setFormUser({ value: $event.target.value, prop: 'name' })"
              type="text" 
              name="name"
              placeholder="Digite o nome"
              :class="erroName === 'erro' ? 'input-form erro' : 'input-form'"
            >
            <h5 class="erro-text" v-if="erroName === 'erro'">O campo deve conter 3 caracteres ou mais</h5>
          </label>
          <label class="input-form-label" for="email">
            <span>Email</span>
            <input
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              :model-value="getFormUser.email"
              @change="setFormUser({ value: $event.target.value, prop: 'email' })"
              type="email"
              name="email" 
              placeholder="me@example.com"
              class="input-form"
            >
          </label>
        </div>
        <div class="selects-container">
          <SelectorForm propKey="department" :title="title = 'Setor'" :options="departments"/>
          <SelectorForm propKey="occupation" :title="title = 'Função'" :options="occupations"/>
          <SelectorForm propKey="role" :title="title = 'Cargo'" :options="roles"/>
        </div>
        <img class="switch-button" v-if="erroName !== 'ok'" src="../assets/inative.svg" alt="switch-image-off"/>
        <img class="switch-button" v-else src="../assets/active.svg" alt="switch-image-on"/>
        <ButtonForm :homeButton="homeButton"/>
    </form>
  </div>
</template>

<script>
import ButtonForm from '../components/Button.vue'
import SelectorForm from '../components/Selector.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'CreateUser',
  components: {
    SelectorForm,
    ButtonForm,
  },
  computed: {
    ...mapGetters(['getFormUser'])
  },
  methods: {
    validEmail: function (email) {
      var pattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
      return pattern.test(email);
    },
    ...mapMutations(['setFormUser']),
  },
  data() {
    return {
      route: '',
      departments: [
        'Sales',
        'Marketing',
        'Social Media',
        'Branding & Marketing',
        'Ads',
        'Architectural Genie',
      ],
      occupations: [
        'Trainee',
        'Computer Network Architect',
        'Specialist',
        'Content Manager',
        'Copywriting',
        'Brand Manager',
        'Account executive',
      ],
      roles: [
        'Admin',
        'Editor',
      ],
      title: '',
      homeButton: false,
      erroName: '',
      url: '',
      screen: 0,
    }
  },
  mounted() {
    this.screen = window.screen.width
  },
}
</script>

<style lang="sass">
@import '../sass/_mixins';

.form-container
  padding: 40px 40px 90px 40px
  display: flex
  flex-direction: column
  margin: 8% 10% 8% 28%
  background-color: #fff
  border-radius: 10px
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);

  @include mobile-version
    padding: 30px 15px
    margin: 0
    flex-direction: column
    width: 100%
    height: 100%
    justify-items: center
    border: none
    border-radius: 0
    box-shadow: none 

h3
  height: 40px
  width: 100%
  font-size: 16px
  color: #6B7280

  @include mobile-version
    font-size: 1.2rem

hr
  size: 1
  color: #E5E7EB

.user-container
  margin: 58px 0 21px 0

.title-user-picture
  margin: 20px 0
  padding: 0
  font-size: 16px
  font-weight: bold

  @include mobile-version
    font-size: 1.2rem

.image-container
  display: flex
  align-items: center

  img
    width: 70px
    margin: 20px 10px 10px 0

  button
    background-color: #fff
    color: #111827
    border: solid 1px #E5E7EB
    border-radius: 4px
    padding: 0.5rem 1rem
    margin-top: 1rem
    font-size: 14px
    cursor: pointer

    @include mobile-version
      height: 40px
      width: 25%
      margin: 0 0 0 1rem 
      padding: 0rem 1rem

form
  display: flex
  flex-direction: column
  flex-wrap: wrap

  span
    font-size: 16px
    font-weight: bold
    margin: 0
    padding: 10px 0

    @include mobile-version
      font-size: 1.2rem

  .inputs-container
    display: flex

    @include mobile-version
      flex-direction: column

  .input-form
    border: solid 1px #C4C4C4
    border-radius: 6px
    width: 353px
    height: 40px
  
  .input-form-label
    display: flex
    flex-direction: column
    
    input
      margin-right: 30px

  .erro
    border: solid 1px #E42C17
    color: #E42C17
    
    &::placeholder
      color: #E42C17

    &:focus
      border: solid 1px #E42C17

  @keyframes showText 
    from
      transform: translateY(0px)
      opacity: 0.7
    to
      transform: translateY(5px)
      opacity: 1

  @keyframes changeButton 
    to 
      transform: rotateY(20deg)
      opacity: 1
    from
      transform: rotateY(5deg)
      opacity: 0.90

  .erro-text
    margin: .2rem 0 .4rem 0
    color: #E42C17
    position: static
    animation: showText 100ms linear alternate-reverse

  .switch-button
    width: 60px
    height: 40px
    margin: 10px 0
    cursor: pointer
    animation: changeButton 300ms linear alternate-reverse

  .selects-container
    display: grid
    justify-content: space-between
    margin: 0 0 20px 0
    grid-template-columns: repeat(2, 1fr)
      
    @include mobile-version
      grid-template-columns: 1fr

</style>