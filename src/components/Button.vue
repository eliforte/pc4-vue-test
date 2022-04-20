<template>
  <div>
    <button 
      v-if="typeButton"
      @click="$router.push('/create')"
    >
      Novo
    </button>
    <button
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
