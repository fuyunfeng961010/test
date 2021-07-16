<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <v-button type="test" @eclick="showToast">toast</v-button> -->
    <h3>home</h3>
    <div @click="goList">goList()</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  components: {
  },
  setup() {
    const $toast = inject('$toast') as any
    const showToast = () => {
      $toast({
        msg: 'toast',
      })
    }

    const router = useRouter()
    const goList = () => {
      router.push({
        name: 'List'
      })
    }

    return {
      showToast,
      goList
    }
  },
})
</script>
