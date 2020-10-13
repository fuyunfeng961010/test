<template>
  <div class="home">
    <van-cell center title="是否开启">
      <template #right-icon>
        <van-switch v-model="checked" size="24" />
      </template>
    </van-cell>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  watch: {
    checked: (val, oldVal) => {
      console.log(val, oldVal)
    }
  }
})
export default class Home extends Vue {
  checked = false
}
</script>
