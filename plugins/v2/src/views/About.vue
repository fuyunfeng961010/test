<template>
  <div class="about">
    <div style="display: none">
      <img ref="bgImgRef" crossOrigin :src="imgUrl" v-if="imgUrl" />
      <img ref="bgImgRef" src="./images/bg.jpg" v-else />
    </div>
    <v-button type="warning" @eclick="handlerClick">verify</v-button>
    <div class="dialog">
      <div id="v_verify" :class="{ 'is-border': isBorder }" v-if="isShowSelf">
        <div id="verify_containe">
          <div id="canvas_containe">
            <canvas id="bg_canvas"></canvas>
            <canvas
              id="block_canvas"
              @mousedown.prevent="(e) => drag(e, 'block_canvas', 'circle')"
              @touchstart="
                (e) => {
                  terminal = 'mobile'
                  drag(e, 'block_canvas', 'circle')
                }
              "
            ></canvas>
          </div>
          <div class="slide-box">
            <div
              id="circle"
              @mousedown.prevent="(e) => drag(e, 'circle', 'block_canvas')"
              @touchstart="
                (e) => {
                  terminal = 'mobile'
                  drag(e, 'circle', 'block_canvas')
                }
              "
            >
              <div class="verticals" v-show="!isTouch">
                <img src="./images/vertical_line.png" alt="">
                <img src="./images/vertical_line.png" alt="">
                <img src="./images/vertical_line.png" alt="">
              </div>
              <div class="arrow" v-show="isTouch">
                <img src="./images/arrow_left.png" alt="">
                <img src="./images/arrow_right.png" alt="">
              </div>
            </div>
            <span id="placehold">拖动滑块完成拼图</span>
          </div>

          <div class="operational">
            <img src="./images/close.png" alt="" @click="close" v-if="isClose">
            <img src="./images/reload.png" alt="" @click="initCanvas(true)" v-if="isReload">
          </div>
        </div>
      </div>
      <popup
        v-model="popupShow"
        position="bottom"
        :overlay="false"
        :get-container="getContainer"
        class="result-popup"
        :class="{ 'popup-success': verifyResult }"
      >
        {{ verifyResult ? sText : eText }}
      </popup>
    </div>
  </div>
</template>
<script>
import { Popup } from 'vant';

const l = 42 // 滑块边长
const r = 9 // 滑块圆半径
const PI = Math.PI
const L = l + r * 2 + 3 // 滑块实际边长

const Y = 70 // 滑块Y轴距离

export default {
  name: 'Vverify',
  data() {
    return {
      popupShow: false,
      verifyResult: '',
      terminal: 'pc',
      blkTilesW: null,
      bgWidth: null,
      isTouch: false
    }
  },
  model: {
    prop: 'isShowSelf',
    event: 'change'
  },
  props: {
    isShowSelf: {
      type: Boolean,
      default: true
    },
    width: {
      // type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 180
    },
    isBorder: {
      type: Boolean,
      default: true
    },
    imgUrl: {
      type: String,
      default: 'https://lh3.googleusercontent.com/proxy/QYTq0IKuQ_BySo8JJdt3-005Y9hYrpurLF_9V0YD7KuN8XABgIOpBK1rif8sT1pkYoAQqe6vjvFkanjLt7_pDK7GI0sT19ilJptvWq9vLPovrTRt8MjgjThD7L2T1wN_5G_SCXVtFdSZbaccxK6-yRXxGLcTznWS0ogBvA'
    },
    sText: {
      type: String,
      default: '验证通过'
    },
    eText: {
      type: String,
      default: '请正确拼合图像'
    },
    isClose: {
      type: Boolean,
      default: true
    },
    isReload: {
      type: Boolean,
      default: true
    },
  },
  components: {
    Popup
  },
  mounted() {
    this.initCanvas()
  },
  methods: {
    handlerClick() {
      console.log('handlerClick')
    },
    close() {
      // this.isShowSelf = false
      this.$emit('change', false)
    },
    getContainer() {
      return document.getElementById("canvas_containe");
    },
    initCanvas(reset = false) {
      const bg_canvas = document.getElementById("bg_canvas")
      const bg_ctx = bg_canvas.getContext('2d')

      const block_canvas = document.getElementById("block_canvas")
      const block_ctx = block_canvas.getContext('2d')

      const placehold = document.getElementById("placehold")
      placehold.style.opacity = 1

      const img = this.$refs.bgImgRef


      /**
       * 
       * 未指定背景图高度时  默认父级宽度100%
       * -20 为两边10px的padding
       * -2  默认border线框时
       * 
       */
      let width
      if (this.width) {
        width = this.width
      } else {
        // const v_verify_width = document.getElementById("v_verify").parentNode.clientWidth
        const v_verify_width = document.getElementById("v_verify").parentNode.getBoundingClientRect().width
        width = v_verify_width - 20
        if (this.isBorder) {
          width = width - 2
        }
      }

      const height = this.height

      const random = (start, end) => {
        // return Math.floor(Math.random() * (max - min) + min)
        return Math.floor(Math.random() * (end - start) + start)
      }

      /**
       * 滑块随机受控图形区间内 x轴
       * L + 10 滑块边长 + 10px间隙
       */
      this.bgWidth = width
      const blkTilesW = random(L + 10, width - (L + 10))
      this.blkTilesW = blkTilesW

      bg_canvas.width = width
      bg_canvas.height = height
      block_canvas.width = width
      block_canvas.height = height

      img.onload = () => {
        // console.log('onload')

        this.draw(bg_ctx, { x: blkTilesW, y: Y, r: r }, 'fill')
        this.draw(block_ctx, { x: blkTilesW, y: Y, r: r }, 'clip')

        bg_ctx.drawImage(img, 0, 0, width, height)
        block_ctx.drawImage(img, 0, 0, width, height)

        // 提取滑块放至左侧 并重置滑块画布宽度
        const y = Y - r * 2 - 1
        const ImageData = block_ctx.getImageData(blkTilesW - 3, y, L, L)
        block_canvas.width = L
        block_ctx.putImageData(ImageData, 0, y)
      }

      // 重置画布 
      if (reset) {
        this.draw(bg_ctx, { x: blkTilesW, y: Y, r: r }, 'fill')
        this.draw(block_ctx, { x: blkTilesW, y: Y, r: r }, 'clip')

        bg_ctx.drawImage(img, 0, 0, width, height)
        block_ctx.drawImage(img, 0, 0, width, height)

        // 提取滑块放至左侧 并重置滑块画布宽度
        const y = Y - r * 2 - 1
        const ImageData = block_ctx.getImageData(blkTilesW - 3, y, L, L)
        block_canvas.width = L
        block_ctx.putImageData(ImageData, 0, y)
      }
    },
    drag(event, targetId, linkageId) {
      // console.log("clickE => ", event);
      this.isTouch = true
      const targetDom = document.querySelector(`#${targetId}`);
      const linkageDom = document.querySelector(`#${linkageId}`);
      const placehold = document.querySelector("#placehold");
      const terminal = this.terminal

      let x = 0;
      const move = moveEV => {
        // console.log("moveE => ", moveEV);
        if (terminal === 'pc') {
          x = moveEV.x - event.x
        } else {
          x = moveEV.changedTouches[0].clientX - event.changedTouches[0].clientX
        }
        // console.log('x', x)
        /**
         * 滑块拖动限定
         * 
         */
        if (x < 8) {
          placehold.style.opacity = 1
        }
        if (x >= (this.bgWidth - L) || x <= -2) return false
        targetDom.style.left = x + 'px';
        linkageDom.style.left = x + "px";
        placehold.style.opacity = 0
      };

      const up = () => {
        this.isTouch = false
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);

        document.removeEventListener("touchmove", move);
        document.removeEventListener("touchend", up);

        // console.log('x', x)

        // 图块契合度 左右5 偏差
        const intervalMax = this.blkTilesW + 5
        const intervalMin = this.blkTilesW - 5
        if (x >= intervalMin && x <= intervalMax) {
          this.verifyResult = true
        } else {
          this.verifyResult = false
        }

        this.popupShow = true
        setTimeout(() => {
          this.popupShow = false
        }, 500)
        targetDom.style.left = 0
        linkageDom.style.left = 0
        this.initCanvas(true)
      };

      if (terminal === 'pc') {
        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", up);
      } else {
        document.addEventListener("touchmove", move);
        document.addEventListener("touchend", up);
      }
    },
    draw(ctx, xy, type) {
      const x = xy.x, y = xy.y;
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI)
      ctx.lineTo(x + l, y)
      ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI)
      ctx.lineTo(x + l, y + l)
      ctx.lineTo(x, y + l)
      ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true)
      ctx.lineTo(x, y)
      ctx.lineWidth = 2
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)'
      ctx.stroke()
      ctx.globalCompositeOperation = 'destination-over'
      type === 'fill' ? ctx.fill() : ctx.clip()
    }
  }
}
</script>
<style scoped lang="stylus">
::v-deep .van-overlay {
  position: absolute;
}

::v-deep .van-popup {
  position: absolute;
}

.result-popup {
  height: 30px;
  line-height: 30px;
  color: white;
  background: #DE715B;
  text-align: center;
}

.popup-success {
  background: #41B883;
}

.is-border {
  border: 1px solid rgb(199, 198, 198);
}

#v_verify {
  width: auto;
  height: auto;
  display: inline-block;
  // margin: 20px auto 0;
  padding: 10px;
  border-radius: 5px;
  overflow: hidden;

  #verify_containe {
    position: relative;
    padding-bottom 45px

    #canvas_containe {
      position: relative;
      line-height: 0;

      #block_canvas {
        position: absolute;
        left: 0px;
        cursor: pointer;
      }
    }

    .slide-box {
      width: 100%;
      height: 40px;
      margin-top: 15px;
      border-radius: 20px;
      background: #DFE0E1;
      position: relative;
      color: #A3ABB3;
      display: flex;
      align-items: center;
      justify-content: center;

      #circle {
        width: 50px;
        height: 50px;
        top: -8px;
        left: 0;
        border-radius: 50px;
        position: absolute;
        background: white;
        border: 1px solid #D0D0D0;
        cursor: pointer;
        display flex
        justify-content center
        align-items center

        .verticals {
          display flex
          align-item center
          img {
            width 8px
            height 16px
          }
        }

        .arrow {
          display flex
          align-item center
          img {
            width 15px
            height 18px
          }
        }
      }

      #placehold {
        transition: opacity 0.3s;
        user-select: none;
      }
    }

    .operational {
      position absolute
      width: 100%
      height 32px
      left -10px
      bottom 0
      border-top 1px solid #EAE8E8
      padding 0 10px
      display flex
      align-items flex-end

      img:first-child {
        margin-left 0
      }

      img {
        width 22px
        height 22px
        margin-left 10px
        cursor: pointer;
      }
    }
  }
}

.dialog {
  width: 22%;
  // width: 400px;
  text-align: center;
  margin: 0 auto;
  // border 1px solid
}
</style>