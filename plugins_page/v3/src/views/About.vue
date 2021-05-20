<template>
  <div class="about">
    <h1>This is an about page12</h1>
    <SliderVerify v-model:isShowSelf="isShowSelf"></SliderVerify>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const isShowSelf = ref(true)
    return {
      isShowSelf
    }
  }
});
</script>

<style>

</style>