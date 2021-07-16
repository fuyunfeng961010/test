<template>
  <div class="home">
    <h3>pagetwo</h3>
    <div @click="goPagethree">goPagethree()</div>
    <div @click="go(-1)">go(-1)</div>
    <div @click="go(-2)">go(-2)</div>
    <div @click="go(-3)">go(-3)</div>
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
    goPagethree() {
      this.$router.push({
        name: 'Pagethree'
      })
    },
    go(num) {
      this.$router.go(num)
    }
  }
};
</script>
<style lang="stylus" scoped>
.home {
  padding 20px 2.5% 0;
}

div:first-child {
  margin-top 0
}

div {
  margin-top 10px
}
</style>