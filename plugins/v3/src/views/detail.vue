<template>
  <div class="about">
    <h4>detail</h4>
    <div @click="goPageone">goPageone()</div>
    <div @click="go(-1)">go(-1)</div>
    <div @click="go(-2)">go(-2)</div>
    <div @click="go(-3)">go(-3)</div>
    <div @click="go(-5)">go(-5)</div>
    <div @click="replacePageone">replace(Pageone)</div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted
} from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Detail',
  setup() {
    const router = useRouter()
    const goPageone = () => {
      router.push({
        name: 'Pageone'
      })
    }
    const go = (num: number) => {
      router.go(num)
    }
    const replacePageone = () => {
      router.replace({
        name: 'Pageone'
      })
    }
    onMounted(() => {
      // const router = useRouter()
      // console.log('router', router.getRoutes())
    })
    return {
      goPageone,
      go,
      replacePageone
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
