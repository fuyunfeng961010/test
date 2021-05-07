<template>
  <transition name='fade'>
    <div class='uco-toast' v-if='isShow'>
      <span>{{msg}}</span>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'Toast',
  setup() {
    const state = reactive({
      isShow: false,
      msg: 'toast'
    })
    return {
      ...toRefs(state)
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
