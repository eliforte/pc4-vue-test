<template>
  <div class="button-container">
    <button
      type="button"
      class="btn-create"
      v-if="homeButton"
      @click="$router.push('/create')"
    >
      Novo
    </button>
    <button
      type="button"
      class="btn-create"
      v-else
      @click="$router.push('/'), syncToLocalStore()"
    >
      Salvar
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ButtonForm',
  props: {
    homeButton: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    ...mapActions(['syncToLocalStore']),
  }
}
</script>

<style lang="sass">
@import '../sass/_mixins';

@include mobile-version
  .button-container
    display: flex
    justify-content: center

  .btn-create
    font-size: 1.2rem
    margin: 2rem 0 1rem 0
    padding: 1rem 0
    width: 50%
    background-color: #4F46E5
    color: #fff
    border: solid 1px #fff
    border-radius: 4px

    &:hover
      background-color: #fff
      color: #4F46E5
      border: solid 1px #4F46E5

</style>
