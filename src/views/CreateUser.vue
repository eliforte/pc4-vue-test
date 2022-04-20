<template>
  <div>
    <div>
      <label title="Foto">
        <img src="test" alt="teste">
      </label>
    </div>
    <form @submit.prevent="">
        <label for="name">
          <span>Nome</span>
          <input type="text" name="name" placeholder="Digite o nome">    
        </label>
        <label for="email">
          <span>Email</span>
          <input type="text" name="email" placeholder="me@example.com">
        </label>
        <SelectorForm :options="departments"/>
        <SelectorForm :options="occupations"/>
        <SelectorForm :options="roles"/>
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
      home: false,
    }
  },
}
</script>

<style lang="scss">
</style>