<template>
  <div class="about">
    <div style="display: none">
      
      <img ref="bgImgRef" :src="imgUrl" v-if="imgUrl" />
      <img ref="bgImgRef" src="./images/bg.jpg" v-else />
    </div>
    <v-button type="warning" @eclick="handlerClick">verify</v-button>
    <div class="dialog">
      <div id="v_verify" :class="{'is-border': isBorder}">
        <div id="verify_containe">
          <div id="canvas_containe">
            <canvas id="bg_canvas"></canvas>
            <canvas id="block_canvas"></canvas>
          </div>
          <div class="slide-box">
            <div
              id="circle"
              @mousedown.prevent="drag"
              @touchstart="
                (e) => {
                  terminal = 'mobile'
                  drag(e)
                }
              "
            ></div>
            <span id="placehold">拖动滑块完成拼图</span>
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
        {{ verifyResult ? '验证通过' : '请正确拼合图像' }}
      </popup>
    </div>
  </div>
</template>
<script>
import { Popup } from 'vant';

export default {
  name: 'Vverify',
  data() {
    return {
      popupShow: false,
      verifyResult: '',
      terminal: 'pc',
      bgTilesW: null,
      blkTilesW: null,
      bgWidth: null
    }
  },
  props: {
    width: {
      // type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 200
    },
    isBorder: {
      type: Boolean,
      default: true
    },
    imgUrl: {
      type: String,
      default: ''
    }
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
    getContainer() {
      return document.getElementById("canvas_containe");
    },
    initCanvas(reset = false) {
      const bg_canvas = document.getElementById("bg_canvas")
      const bg_ctx = bg_canvas.getContext('2d')

      const block_canvas = document.getElementById("block_canvas")
      const block_ctx = block_canvas.getContext('2d')

      const circle = document.getElementById("circle")
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

      const random = (max, min) => {
        return Math.floor(Math.random() * (max - min) + min)
      }

      /**
       * 滑块随机受控图形区间内 x轴
       * 56 图块大致的宽度
       * 28 再减去自身一半 防止位置默认重叠
       */
      const bgTilesW = random(width - 56, (width) / 2 + 28)
      const blkTilesW = random((width) / 2 - 28, 1)
      this.bgWidth = width
      this.bgTilesW = bgTilesW
      this.blkTilesW = blkTilesW

      circle.style.left = blkTilesW + 'px'

      bg_canvas.width = width
      bg_canvas.height = height
      block_canvas.width = width
      block_canvas.height = height

      img.onload = () => {
        console.log('onload')
        bg_ctx.drawImage(img, 0, 0, width, height)
        // block_ctx.drawImage(img, 0, 0, width, height)
        this.drawBlock(bg_ctx, { x: bgTilesW, y: 70, r: 10 }, 'fill')
        this.drawBlock(block_ctx, { x: blkTilesW, y: 70, r: 10 }, 'clip')
      }

      if (reset) {
        bg_ctx.drawImage(img, 0, 0, width, height)
        this.drawBlock(bg_ctx, { x: bgTilesW, y: 70, r: 10 }, 'fill')
        this.drawBlock(block_ctx, { x: blkTilesW, y: 70, r: 10 }, 'clip')
      }
    },
    drag(event) {
      // console.log("clickE => ", event);
      const dom = event.target;
      const slider = document.querySelector("#block_canvas");
      const placehold = document.querySelector("#placehold");
      const terminal = this.terminal

      // 图块契合度 左右5 偏差
      const intervalMax = this.bgTilesW - this.blkTilesW + 5
      const intervalMin = this.bgTilesW - this.blkTilesW - 5

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
         * 53 图块大致的宽度
         * blkTilesW x 图块初始值
         * 8  提示文案显隐
         * 
         */
        if (x < 8) {
          placehold.style.opacity = 1
        }
        if (x >= (this.bgWidth - 53 - this.blkTilesW) || x <= -this.blkTilesW) return false
        dom.style.left = x + this.blkTilesW + 'px';
        slider.style.left = x + "px";
        placehold.style.opacity = 0
      };

      const up = () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);

        document.removeEventListener("touchmove", move);
        document.removeEventListener("touchend", up);

        // console.log('x', x)

        if (x >= intervalMin && x <= intervalMax) {
          this.verifyResult = true
        } else {
          this.verifyResult = false
        }

        this.popupShow = true
        setTimeout(() => {
          this.popupShow = false
        }, 500)
        slider.style.left = 0
        this.initCanvas(true)

        // setInterval(() => {
        //   this.initCanvas(true)
        // }, 500)
      };

      if (terminal === 'pc') {
        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", up);
      } else {
        document.addEventListener("touchmove", move);
        document.addEventListener("touchend", up);
      }
    },
    drawBlock(ctx, xy, type = 'fill') {
      // console.log('drawBlock', xy)
      const x = xy.x,
        y = xy.y,
        r = xy.r,
        w = 40;
      const PI = Math.PI;
      ctx.beginPath();
      //left
      ctx.moveTo(x, y);
      //top
      ctx.arc(x + (w + 5) / 2, y, r, -PI, 0, true);
      ctx.lineTo(x + w + 5, y);
      //right
      ctx.arc(x + w + 5, y + w / 2, r, 1.5 * PI, 0.5 * PI, false);
      ctx.lineTo(x + w + 5, y + w);
      //bottom
      ctx.arc(x + (w + 5) / 2, y + w, r, 0, PI, false);
      ctx.lineTo(x, y + w);
      ctx.arc(x, y + w / 2, r, 0.5 * PI, 1.5 * PI, true);
      ctx.lineTo(x, y);
      //图块样式
      ctx.lineWidth = 2;
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
      // ctx.globalCompositeOperation = "xor";
      ctx.stroke();
      // ctx[type]();
      ctx.clip()
      
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

    #canvas_containe {
      position: relative;
      line-height: 0;

      #block_canvas {
        position: absolute;
        left: 0px;
      }
    }

    .slide-box {
      width: 100%;
      height: 40px;
      margin-top: 10px;
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
        border-radius: 50px;
        position: absolute;
        background: white;
        border: 1px solid #D0D0D0;
      }

      #placehold {
        transition: opacity 0.3s;
      }
    }
  }
}

.dialog {
  width 26%
  // width: 400px;
  text-align: center;
  margin: 0 auto;
  // border 1px solid
}
</style>