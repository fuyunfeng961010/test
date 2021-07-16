<template>
  <div class="home">
    <h3>home</h3>
    <div @click="goList">goList()</div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <v-button type="warning" @eclick="handlerClick"></v-button> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
  },
  mounted() {
    // console.log('$routerHistory', this.$routerHistory.getters.routes())
  },
  methods: {
    goList() {
      this.$router.push({
        name: 'List'
      })
    }
  }
};
</script>
<style lang="stylus" scoped>
.home {
  padding 20px 2.5% 0;
}
</style>