<template>
  <div class="about">
    <h4>list</h4>
    <div @click="goDetail">goDetail()</div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
} from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'List',
  setup() {
    const router = useRouter()
    const goDetail = () => {
      router.push({
        name: 'Detail'
      })
    }
    return {
      goDetail
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
</style>
