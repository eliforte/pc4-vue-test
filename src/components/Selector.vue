<template>
  <div>
    <label>
      <span>{{ title }}</span>
      <select>
        <option selected value="item">Selecione o item</option>
        <option v-for="(option, index) in options" :key="index">
          {{ option }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>

export default {
  name: 'SelectorForm',
  props: {
    title: String,
    options: {
      type: Array,
      required: true
    }
  },
}

</script>
