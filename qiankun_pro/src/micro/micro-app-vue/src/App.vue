<template>
  <div id="appChild">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
#appChild
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
