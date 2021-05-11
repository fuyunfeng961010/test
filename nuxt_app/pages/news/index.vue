<template>
  <div class="container">
    <div>
      {{ title }}
    </div>
    <a-dropdown>
      <a class="ant-dropdown-link">
        Hover me {{ value }} <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item v-for="(item, index) in list" :key="index">
          <a href="javascript:;" @click="itemClick(item)">{{item.title}}</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: 'News page',
      list: [],
      value: null
    }
  },
  created() {
    console.log('created', this)
  },
  async asyncData() {
    console.log('asyncData', this)
    const { data: list } = await axios({
      url: 'https://portal.fuyunfeng.top/api/test'
    })
    return {
      list
    }
  },
  methods: {
    itemClick(item) {
      this.value = item.id
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
