<template>
  <div class="about">
    <h4>pageone</h4>
    <div @click="goPagetwo">goPagetwo()</div>
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
    const goPagetwo = () => {
      router.push({
        name: 'Pagetwo'
      })
    }
    return {
      goPagetwo
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
