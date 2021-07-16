<template>
  <div class="about">
    <h4>pagethree</h4>
    <div @click="goHome">goHome()</div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
} from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Pagethree',
  setup() {
    const router = useRouter()
    const goHome = () => {
      router.push({
        name: 'Home'
      })
    }
    return {
      goHome
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
