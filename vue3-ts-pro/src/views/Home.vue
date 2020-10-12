<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { defineAsyncComponent } from 'vue'

@Options({
  components: {
    HelloWorld: defineAsyncComponent(() => {
      return import('@/components/HelloWorld.vue')
    })
  },
})
export default class Home extends Vue {}
</script>
