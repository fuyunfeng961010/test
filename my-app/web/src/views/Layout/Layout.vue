<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped>
.layout {
  height: calc(100% - 100px)
  overflow auto
}
</style>
