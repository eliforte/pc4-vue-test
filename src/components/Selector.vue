<template>
  <label class="label-select">
    <span class="title-select">{{ title }}</span>
    <select
      :model-value="getFormUser[propKey]"
      @change="setFormUser({ value: $event.target.value, prop: propKey })"
    >
      <option selected disabled value="Selecione o item">Selecione o item</option>
      <option v-for="(option, index) in options" :key="index">
        {{ option }}
      </option>
    </select>
  </label>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'SelectorForm',
  props: {
    title: String,
    propKey: String,
    options: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getFormUser'])
  },
  methods: {
    ...mapMutations(['setFormUser']),
  }
}

</script>

<style lang="sass">
@import '../sass/_mixins';

.label-select
  display: flex
  flex-direction: column
  margin-bottom: 1rem
  width: 100%

  .title-select
    font-size: 1.2rem
    margin: 0 0 1rem 0

  select
    border: solid 1px #C4C4C4
    background-color: #fff
    font-size: 1.2rem
    padding: .7rem 0
    width: 100%
    border-radius: 6px
    color: #6B7280

    &:active
      width: 100%
      border-radius: 4px


.title-select
  font-weight: bold
  font-size: 1.2rem
  margin: 0 2rem 1rem 0
</style>
