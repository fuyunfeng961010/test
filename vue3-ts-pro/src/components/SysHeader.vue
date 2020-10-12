<template>
  <header id="navbar">
    <div id="navbar-container" class="boxed">
      <!--Brand logo & name-->
      <!--================================-->
      <div class="navbar-header">
        <router-link :to="{ name: '' }" class="navbar-brand">
          <!-- <img
            src="../../assets/img/logo.png"
            alt="央视动画授权管理后台"
            class="brand-icon"
          /> -->
          <div class="brand-title">
            <span class="brand-text"></span>
          </div>
        </router-link>
      </div>
      <!--================================-->
      <!--End brand logo & name-->
      <!--Navbar Dropdown-->
      <!--================================-->
      <div class="navbar-content clearfix">
        <ul class="nav navbar-top-links pull-left">
          <li class="tgl-menu-btn">
            <a class="mainnav-toggle" href="javascript:;" @click="navToggle">
              <i class="ti-menu icon-lg"></i>
            </a>
          </li>
          <tongzhi></tongzhi>
          <!-- <Notify_head>顶部状态栏通知消息</Notify_head> -->
        </ul>
        <ul class="nav navbar-top-links pull-right list-unstyled">
          <li id="dropdown-user">
            <a :href="''" class="text-right" target="_blank">
              <!-- <div class="username hidden-xs">
                <i class="fa fa fa-send-o"></i>
                <a :href="''" target="_blank">前往网站主页</a>
              </div> -->
            </a>
          </li>
          <li>
            <a class="shortcut-grid" href="#">
              <div class="username hidden-xs text-warning">
                <i class="ti-power-off"></i> 注销登录
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!--================================-->
      <!--End Navbar Dropdown-->
    </div>
  </header>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
@Options({})
export default class SysHeaders extends Vue {
  // 左侧导航栏切换 自定义控制类
  navToggle() {
    console.log('navToggle')
    this.$emit('btn-lg')
  }
}
</script>

<style scoped lang="stylus"></style>