<template>
  <div class="button-container">
    <button
      type="button"
      class="btn-create-home"
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

.btn-create-home
  width: 80px
  height: 40px
  margin: 30px 0 0 1170px
  border-radius: 4px
  background-color: #4F46E5
  border: none
  position: absolute
  font-size: 16px
  line-height: 19px;
  color: #FFFFFF

  &:hover
    cursor: pointer
    background-color: #2E26BD
    height: 42px
    width: 82px
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);

.btn-create
  width: 80px
  height: 40px
  margin: 30px 0 0 700px
  border-radius: 4px
  background-color: #4F46E5
  border: none
  position: absolute
  font-size: 16px
  line-height: 19px;
  color: #FFFFFF

  &:hover
    cursor: pointer
    background-color: #2E26BD
    height: 42px
    width: 82px
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);

@include mobile-version
  .button-container
    display: flex
    justify-content: center

  .btn-create-home
    font-size: 1.2rem
    margin: 30px 0
    padding: 1rem 0
    height: 50px
    width: 50%
    background-color: #4F46E5
    color: #fff
    border: solid 1px #fff
    border-radius: 4px

    &:hover
      background-color: #fff
      color: #4F46E5
      border: solid 1px #4F46E5

  .btn-create
    width: 80px
    height: 40px
    margin: 30px 0 0 0px
    border-radius: 4px
    height: 50px
    width: 50%
    background-color: #4F46E5
    border: none
    position: absolute
    font-size: 1.2rem
    line-height: 19px;
    color: #FFFFFF

</style>
