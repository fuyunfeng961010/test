<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About1</router-link> |
      <router-link to="/micro-app-vue">micro-app-vue</router-link> |
      <router-link to="/micro-app-jquery">micro-app-jquery</router-link>
    </div>
    <router-view v-show="$route.name" />

    <div id="VueMicroApp"></div>
    <div id="JqueryMicroApp"></div>
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
