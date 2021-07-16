<template>
  <div class="home">
    <h3>detail</h3>
    <div @click="goPageone">goPageone()</div>
    <div @click="go(-1)">go(-1)</div>
    <div @click="go(-2)">go(-2)</div>
    <div @click="go(-3)">go(-3)</div>
    <div @click="go(-5)">go(-5)</div>
    <div @click="replacePageone">replace(Pageone)</div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <v-button type="warning" @eclick="handlerClick"></v-button> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Detail",
  components: {
  },
  methods: {
    goPageone() {
      this.$router.push({
        name: 'Pageone'
      })
    },
    replacePageone() {
      this.$router.replace({
        name: 'Pageone'
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