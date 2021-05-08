<template>
  <span :class="type" style="padding: 5px 10px; border-radius: 5px; background: #41B883; color: white;" :style="type === 'warning' ? 'color: yellow;' : ''">
    <slot>{{ text }}</slot>
  </span>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'v-button',
  props: {
    type: {
      type: String,
      default: 'error'
    }
  },
  setup() {
    const text = ref('确定')
    return {
      text
    }
  }
})
</script>

<style lang="stylus" scoped>
</style>
