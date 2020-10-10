<template>
  <div>
    <nav id="mainnav-container">
      <div id="mainnav">
        <!--Menu-->
        <!--================================-->
        <div id="mainnav-menu-wrap">
          <div class="nano">
            <div class="nano-content">
              <!--Profile Widget-->
              <!--================================-->
              <div id="mainnav-profile" class="mainnav-profile margin-top-20">
                <div class="profile-wrap">
                  <div class="img-Sur" style="margin-top: 2000px">
                    <span class="label label-success pull-right">{{
                      'userinfo.userinfo.title'
                    }}</span>
                    <!-- <img
                      class="img-circle img-sm img-border"
                      @click="dianjiTouxiang"
                      v-if="authCheck(372)"
                      :src="userinfo.userinfo.head"
                    /> -->
                  </div>
                  <div class="box-blockv margin-top-5">
                    <p class="mnp-name text-bold">
                      {{ 'userinfo.userinfo.account' }}（{{
                        'userinfo.userinfo.name'
                      }}）
                    </p>
                    <p class="margin-top-5 text-muted">
                      {{ 'userinfo.userinfo.phone' }}
                    </p>
                  </div>
                </div>
              </div>
              <!--Shortcut buttons-->
              <!--================================-->
              <div id="mainnav-shortcut">
                <ul class="list-unstyled">
                  <li class="col-xs-3" data-content="我的面板">
                    <!-- <router-link :to="{ name: 'home' }" tag="li">
                      <a class="shortcut-grid" href="#">
                        <i class="ti-home"></i>
                      </a>
                    </router-link> -->
                  </li>
                  <li
                    class="col-xs-3"
                    data-content="修改资料"
                  >
                    <a
                      class="shortcut-grid"
                      style="cursor: pointer"
                    >
                      <i class="el-icon-edit-outline"></i>
                    </a>
                  </li>
                  <li
                    class="col-xs-3"
                    data-content="锁定屏幕"
                  >
                    <!-- <router-link :to="{ name: 'lock' }">
                      <a class="shortcut-grid">
                        <i class="ti-lock"></i>
                      </a>
                    </router-link> -->
                  </li>
                  <li
                    class="col-xs-3"
                    data-content="更改密码"
                  >
                    <a class="shortcut-grid" href="#">
                      <i class="ti-key"></i>
                    </a>
                  </li>
                  <!-- <li class="col-xs-3" data-content="注销登录">
                                    <a class="shortcut-grid " href="#" @click="logout">
                                        <i class="ti-power-off"></i>
                                    </a>
                                </li> -->
                </ul>
              </div>
              <!--================================-->
              <!--End shortcut buttons-->
              <!--End 快捷菜单-->
              <ul id="mainnav-menu" class="list-group">
                <div>
                  <li class="list-header">{{ 'group.title' }}</li>
                  <div
                    class="no-margin"
                    id="mainnav-menu"
                  >
                    <!-- <router-link
                      :to="{ name: 'nav.api_name' }"
                      tag="li"
                    >
                      <a href="">
                        <i :class="nav.tubiao"></i>
                        <span class="menu-title">{{ 'nav.title' }}</span>
                      </a>
                    </router-link> -->
                    <li>
                      <a href="#">
                        <!-- <i :class="nav.tubiao"></i> -->
                        <span class="menu-title">{{ 'nav.title' }}</span>
                        <i class="arrow"></i>
                      </a>
                      <ul class="collapse">
                        <div>
                          <!-- <router-link
                            :to="{ name: 'subNav.api_name' }"
                            tag="li"
                          >
                            <a href="">
                              {{ 'subNav.title' }}
                            </a>
                          </router-link> -->
                          <li>
                            <a href="#">
                              <span class="menu-title">{{ 'subNav.title' }}</span>
                              <i class="arrow"></i>
                            </a>
                            <ul class="collapse">
                              <!-- <router-link
                                :to="{ name: 'sublineNav.api_name' }"
                                tag="li"
                              >
                                <a href="">
                                  {{ 'sublineNav.title' }}
                                </a>
                              </router-link> -->
                            </ul>
                          </li>
                        </div>
                      </ul>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <!--================================-->
        <!--End menu-->
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
export default {}
</script>

<style scoped lang="stylus">
</style>