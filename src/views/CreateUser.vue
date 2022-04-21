<template>
  <div class="form-container">
    <label title="Foto">
      <img src="test" alt="teste">
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

.form-container
  width: 100%
  margin: 1.2rem

form
  display: flex
  flex-direction: column
</style>