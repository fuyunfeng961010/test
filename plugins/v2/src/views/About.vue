<template>
  <div class="about">
    <div style="display: none">
      <img ref="bgImgRef" src="./images/bg.jpg" />
    </div>
    <v-button type="warning" @eclick="handlerClick">verify</v-button>
    <div class="v_verify">
      <div id="verify_containe">
        <div id="carnvas_containe">
          <canvas id="bg_canvas"></canvas>
          <canvas id="block_canvas"></canvas>
        </div>
        <div class="slide-box">
          <div id="circle" @mousedown.prevent="drag"></div>
          <span id="placehold">拖动滑块完成拼图</span>
        </div>
      </div>
    </div>
    <popup v-model="show" position="bottom" :overlay="false" :get-container="getContainer" :style="{ height: '30px', lineHeight: '30px', color: 'white', background: '#41B883' }">
      {{ verifyResult }}
    </popup>
  </div>
</template>
<script>
import { Popup } from 'vant';

export default {
  name: 'Vverify',
  data() {
    return {
      show: false,
      verifyResult: ''
    }
  },
  components: {
    Popup
  },
  mounted() {
    this.init()
  },
  methods: {
    handlerClick() {
      console.log('handlerClick')
    },
    getContainer() {
      return document.getElementById("carnvas_containe");
    },
    init(reset = false) {
      const bg_canvas = document.getElementById("bg_canvas")
      const bg_ctx = bg_canvas.getContext('2d')

      const block_canvas = document.getElementById("block_canvas")
      const block_ctx = block_canvas.getContext('2d')

      const circle = document.getElementById("circle")
      const placehold = document.getElementById("placehold")
      circle.style.left = '15px'
      placehold.style.opacity = 1

      const img = this.$refs.bgImgRef
      const width = 320
      const height = 200

      bg_canvas.width = width
      bg_canvas.height = height
      block_canvas.width = width
      block_canvas.height = height

      img.onload = () => {
        bg_ctx.drawImage(img, 0, 0, width, height)
        // block_ctx.drawImage(img, 0, 0, width, height)
        this.drawBlock(bg_ctx, { x: 255, y: 70, r: 10 }, 'fill')
        this.drawBlock(block_ctx, { x: 15, y: 70, r: 10 }, 'clip')
      }

      if (reset) {
        bg_ctx.drawImage(img, 0, 0, width, height)
        this.drawBlock(bg_ctx, { x: 255, y: 70, r: 10 }, 'fill')
        this.drawBlock(block_ctx, { x: 15, y: 70, r: 10 }, 'clip')
      }
    },
    drawBlock(ctx, xy = { x: 255, y: 70, r: 10 }, type = 'fill') {
      console.log('drawBlock', xy)
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
      ctx.lineWidth = 1;
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
      ctx.stroke();
      ctx[type]();
      ctx.globalCompositeOperation = "xor";
    },
    drag(event) {
      console.log("clickE => ", event);
      const dom = event.target;
      const slider = document.querySelector("#block_canvas");
      const placehold = document.querySelector("#placehold");

      let x = 0;
      const move = moveEV => {
        x = moveEV.x - event.x
        console.log('x', x)
        /**
         * 滑块拖动限定
         * 53 图块大致的宽度
         * 15 x 图块初始值
         * 
         */
        if (x < 8) {
          console.log('111')
          placehold.style.opacity = 1
        }
        if (x >= (320 - 53 - 15) || x <= -15) return false
        dom.style.left = x + 15 + 'px';
        slider.style.left = x + "px";
        placehold.style.opacity = 0
      };

      const up = () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);

        console.log('x', x)
        // 当前 240 图块契合度 左右5 偏差
        if (x >= 235 && x <= 245) {
          this.verifyResult = '验证通过'
        } else {
          this.verifyResult = '请正确拼合图像'
        }

        this.show = true
        setTimeout(() => {
          this.show = false
        }, 500)
        slider.style.left = 0
        this.init(true)
      };

      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
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
.v_verify {
  width: 320px;
  height: 320px;
  margin: 20px auto 0;
  padding: 10px;
  border: 1px solid rgb(199, 198, 198);
  border-radius: 5px;

  #verify_containe {
    position: relative;

    #carnvas_containe {
      position: relative;
    }

    #block_canvas {
      position: absolute;
      left: 0px;
    }

    .slide-box {
      width: 100%;
      height: 40px;
      margin-top: 10px;
      border-radius: 20px;
      background: #DFE0E1;
      position: relative;
      color #A3ABB3
      display flex
      align-items center
      justify-content center

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
        transition opacity .3s
      }
    }
  }
}
</style>