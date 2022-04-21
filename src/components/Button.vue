<template>
  <div>
    <button
      class="btn-create"
      v-if="typeButton"
      @click="$router.push('/create')"
    >
      Novo
    </button>
    <button
      class="btn-create"
      v-else
      @click="$router.push('/')"
    >
      Salvar
    </button>
  </div>
</template>

<script>

export default {
  name: 'ButtonForm',
  props: {
    typeButton: {
      type: Boolean,
      required: true
    }
  },
}
</script>

<style lang="sass">
@import '../sass/_mixins';

@include mobile-version
  .btn-create
    font-size: 1.2rem
    margin: 4rem 0 1rem 0
    padding: 1rem 0
    width: 100%
    background-color: #4F46E5
    color: #fff
    border: solid 1px #fff
    border-radius: 4px

    &:hover
      background-color: #fff
      color: #4F46E5
      border: solid 1px #4F46E5

</style>
