<template>
  <div class="home">
    <h3>pagethree</h3>
    <div @click="goHome">goHome()</div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <v-button type="warning" @eclick="handlerClick"></v-button> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Pageone",
  components: {
  },
  methods: {
    goHome() {
      this.$router.push({
        name: 'Home'
      })
      // this.$router.go(-1)
    }
  }
};
</script>
<style lang="stylus" scoped>
.home {
  padding 20px 2.5% 0;
}
</style>