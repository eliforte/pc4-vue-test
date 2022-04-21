<template>
  <div class="form-container">
    <label class="user-container">
      <span>Nome</span>
      <div class="image-container">
        <img src="test" alt="teste">
        <button>Modificar</button>
      </div>
    </label>
    <form>
        <label for="name">
          <span>Nome</span>
          <input v-model="name" type="text" name="name" placeholder="Digite o nome">    
        </label>
        <label for="email">
          <span>Email</span>
          <input v-model="email" type="text" name="email" placeholder="me@example.com">
        </label>
        <SelectorForm :title="title = 'Setor'" :options="departments"/>
        <SelectorForm :title="title = 'Cargo'" :options="occupations"/>
        <SelectorForm :title="title = 'Função'" :options="roles"/>
        <ButtonForm :typeButton="home"/>
    </form>
  </div>
</template>

<script>
import ButtonForm from '../components/Button.vue'
import SelectorForm from '../components/Selector.vue'

export default {
  name: 'CreateUser',
  components: {
    SelectorForm,
    ButtonForm,
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
      home: false,
      name: '',
      email: '',
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
    margin: 1.2rem

  .user-container
    display: flex
    flex-direction: column
    
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
</style>