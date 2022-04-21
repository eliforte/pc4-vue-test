<template>
  <div class="form-container">
    <label class="user-container">
      <span>Foto</span>
      <div class="image-container">
        <img src="test" alt="teste">
        <button>Modificar</button>
      </div>
    </label>
    <form autocomplete="off" @submit.prevent="syncToLocalStorage">
        <label for="name">
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
        <label for="email">
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
        <SelectorForm propKey="department" :title="title = 'Setor'" :options="departments"/>
        <SelectorForm propKey="occupation" :title="title = 'Cargo'" :options="occupations"/>
        <SelectorForm propKey="role" :title="title = 'Função'" :options="roles"/>
        <img class="switch-button" v-if="erroName !== 'ok'" src="../assets/inative.svg" alt="switch-image-off"/>
        <img class="switch-button" v-else src="../assets/active.svg" alt="switch-image-on"/>
        <ButtonForm :homeButton="homeButton"/>
    </form>
  </div>
</template>

<script>
import ButtonForm from '../components/Button.vue'
import SelectorForm from '../components/Selector.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'

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
    ...mapActions(['syncToLocalStorage']),
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
      roles: [
        'Trainee',
        'Computer Network Architect',
        'Specialist',
        'Content Manager',
        'Copywriting',
        'Brand Manager',
        'Account executive',
      ],
      occupations: [
        'Admin',
        'Editor',
      ],
      title: '',
      homeButton: false,
      name: '',
      email: '',
      erroName: '',
      url: '',
    }
  },
}
</script>

<style lang="sass">
@import '../sass/_mixins';

@include mobile-version
  .form-container
    display: flex
    flex-direction: column
    width: 100%
    height: 100%
    margin: 3rem .5rem 0 0
    justify-items: center

  label
    margin: .5rem 0

  .user-container
    display: flex
    flex-direction: column
    margin: 0 0 3rem 0
    
    span
      font-size: 1.2rem
      font-weight: bold

    .image-container
      img
        width: 100px
        height: 100px
        border-radius: 50%
        border: solid 1px #E5E7EB
        margin: 0 1rem

      button
        background-color: #fff
        color: #111827
        border: solid 1px #E5E7EB
        border-radius: 4px
        padding: 0.5rem 1rem
        margin-top: 1rem
        font-size: 1.2rem
        cursor: pointer
      
  form
    display: flex
    flex-direction: column

    @include mobile-version
      width: 100%

      span
        font-size: 1.2rem
        font-weight: bold

      .input-form
        font-size: 1.2rem
        margin: .5rem 0
        border: solid 1px #C4C4C4
        border-radius: 6px
        width: 100%
        height: 2.5rem
        
      
      .erro
        border: solid 1px #E42C17
        color: #E42C17
      
        &::placeholder
          color: #E42C17

      .erro-text
        margin: .2rem 0 .4rem 0
        color: #E42C17
        position: static
        animation: showText 100ms linear alternate-reverse

        @keyframes showText 
          from
            transform: translateY(0px)
            opacity: 0.7
          to
            transform: translateY(5px)
            opacity: 1
        

      .switch-button
        width: 5rem
        height: 3rem
        margin: 10px 0
        cursor: pointer
        animation: changeButton 300ms linear alternate-reverse
        
        @keyframes changeButton 
          to 
            transform: rotateY(20deg)
            opacity: 1
          from
            transform: rotateY(5deg)
            opacity: 0.90
        
</style>