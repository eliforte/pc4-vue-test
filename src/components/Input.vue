<template>
  <div>
    <label for="name">
      <span>{{ title }}</span>
      <input name="name" type={{ typeInput }} placeholder={ placeholderText }/>    
    </label>
  </div>
</template>

<script>

export default {
  name: 'InputForm',
  props: {
    typeInput: String,
    placeholderText: String,
  },
}
</script>