<template>
  <div class="about">
    <h4>pagetwo</h4>
    <div @click="goPagethree">goPagethree()</div>
    <div @click="go(-1)">go(-1)</div>
    <div @click="go(-2)">go(-2)</div>
    <div @click="go(-3)">go(-3)</div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
} from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Pageone',
  setup() {
    const router = useRouter()
    const goPagethree = () => {
      router.push({
        name: 'Pagethree'
      })
    }
    const go = (num: number) => {
      router.go(num)
    }
    return {
      goPagethree,
      go
    }
  }
})
</script>
<style lang="stylus">
.opreation {
  display: flex;

  span {
    margin-left: 20px;
  }
}
div:first-child {
  margin-top 0
}

div {
  margin-top 10px
}
</style>
