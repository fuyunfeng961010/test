<template>
  <div class="slider-verify-example">
    <div class="nav-header">
      <a href="https://github.com/author-fuyf/slider-verify-v3" target="_blank">
        <img src="./image/gitHub.png" alt="">
        <span class="github">GitHub</span>
      </a>
    </div>
    <el-row>
      <el-col :md="12" :sm="24">
        <div class="left-config">
          <el-form ref="form" :model="sliderVConf" label-width="80px">
            <el-form-item label="图片链接">
              <el-input
                v-model="imgUrl"
                placeholder="完整绝对路径，如https://"
                @blur="sliderVConf.imgUrl = imgUrl"
              ></el-input>
            </el-form-item>

            <el-row>
              <el-col :span="12">
                <el-form-item label="成功提示">
                  <el-input v-model="sliderVConf.sText"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="失败提示">
                  <el-input v-model="sliderVConf.eText"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8">
                <el-form-item label="显示隐藏">
                  <el-switch v-model="sliderVConf.isShowSelf"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="自带边框">
                  <el-switch v-model="sliderVConf.isBorder"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="取父级宽">
                  <el-switch v-model="sliderVConf.isParentNode"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="8">
                <el-form-item label="关闭按钮">
                  <el-switch v-model="sliderVConf.isCloseBtn"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="刷新按钮">
                  <el-switch v-model="sliderVConf.isReloadBtn"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="宽度">
                  <el-radio-group v-model="sliderVConf.width">
                    <el-radio :label="300">300px</el-radio>
                    <el-radio :label="500">500px</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="高度">
                  <el-radio-group v-model="sliderVConf.height">
                    <el-radio :label="180">180px</el-radio>
                    <el-radio :label="380">380px</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-col>
      <el-col :md="12" :sm="24">
        <div class="right-show-off">
          <SliderVerify
            :imgUrl="sliderVConf.imgUrl"
            :sText="sliderVConf.sText"
            :eText="sliderVConf.eText"
            v-model:isShowSelf="sliderVConf.isShowSelf"
            :isBorder="sliderVConf.isBorder"
            :isParentNode="sliderVConf.isParentNode"
            :isCloseBtn="sliderVConf.isCloseBtn"
            :isReloadBtn="sliderVConf.isReloadBtn"
            :width="sliderVConf.width"
            :height="sliderVConf.height"
            @reload="emitChange('reload')"
            @show="emitChange('show')"
            @hide="emitChange('hide')"
            @close="emitChange('close')"
            @success="emitChange('success')"
            @fail="emitChange('fail')"
          ></SliderVerify>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  name: 'SliderVerifyExample',
  setup() {
    const state = reactive({
      imgUrl: '',
      sliderVConf: {
        imgUrl: '',
        sText: '验证通过',
        eText: '请正确拼合图像',
        isShowSelf: true,
        isBorder: true,
        isParentNode: false,
        isCloseBtn: true,
        isReloadBtn: true,
        width: 300,
        height: 180,
      }
    })
    const emitChange = (type: string) => {
      console.log(type)
    }
    return {
      ...toRefs(state),
      emitChange
    }
  }
})
</script>

<style scoped lang="stylus">
.slider-verify-example {
  // margin-top: 90px;

  .nav-header {
    padding: 20px 50px
    text-align right

    img {
      width 30px
      height 30px;
      cursor: pointer;
    }

    .github {
      margin-left 5px
      vertical-align super
    }
  }

  .left-config {
    width: 80%;
    margin: 0 auto;
  }

  .right-show-off {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>