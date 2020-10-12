<template>
  <div
    id="container"
    class="aside-float aside-bright effect navbar-fixed mainnav-fixed mainnav-lg footer-fixed"
    :class="pageClass ? 'mainnav-sm' : 'mainnav-lg'"
  >
    <!-- 公共头部组件 -->
    <SysHeader @btn-lg="setpageClass"></SysHeader>

    <!-- 内容区 -->
    <div class="boxed">
      <div id="content-container">
        <div id="page-content">
          <span>hello {{ count }}</span>
          <p @click="countAdd">add</p>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>

      
    </div>

    <!-- 左侧导航 -->
    <SysSliderNav></SysSliderNav>

    <!-- 返回顶部按钮 -->
    <button class="scroll-top btn">
      <i class="pci-chevron chevron-up"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { defineAsyncComponent } from 'vue';

@Options({
  components: {
    SysSliderNav: defineAsyncComponent(() => {
      return import('@/components/SysSliderNav.vue')
    }),
    SysHeader: defineAsyncComponent(() => {
      return import('@/components/SysHeader.vue')
    })
  }
})
export default class Layout extends Vue {
  count = 0
  pageClass = false
  countAdd() {
    this.count++
  }
  //导航切换
  setpageClass() {
    this.pageClass = !this.pageClass
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
body, #content-container, #navbar {
  background-color: #ffffff;
}

.el-table td {
  padding: 2px 0;
  font-size: 13px;
  height: 43px;
  line-height: 43px;
}

.el-table th {
  padding: 5px 0;
  background-color: #eef1f6;
  color: #5A5E66;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}

.avatar-uploader-icon {
  font-size: 90px;
  color: #cecece;
  width: 200px;
  height: 170px;
  line-height: 170px;
  text-align: center;
}

.avatar {
  max-width: 200px;
  max-height: 170px;
  display: block;
}

.el-upload-dragger {
  background-color: #fff;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  box-sizing: border-box;
  width: 220px;
  height: 170px;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.leve_count {
  padding-top: 7px;
}

.el-upload__tip {
  color: #ccc;
  margin-top: 0;
}

.el-upload-dragger .el-upload__text {
  font-size: 12px;
}

.vue-html5-editor .toolbar {
  z-index: 9 !important;
}
</style>
