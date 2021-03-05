<template>
  <div class="city-weather-container">
    <div class="header" v-if="isFixed"></div>
    <div class="content font-size-14">
      <div class="city-weather">
        <div class="city-info layout-flex-center">
          <div class="city-container">
            <van-sticky @scroll="pageScroll">
              <p class="city-name layout-flex-center">
                <span class="font-size-20">浦东新区</span>
                <i class="iconfont icondidian font-size-22  offset-px-ml-5"></i>
              </p>
            </van-sticky>
            <p class="current-temperature">
              <span class="current-num">14</span>
              <span class="temperature font-size-26 offset-px-ml-10">℃</span>
            </p>
            <p class="font-size-16">
              <span class="">15℃ / </span>
              <span class="">4℃</span>
            </p>
            <p class="font-size-16">晴 空气良</p>
          </div>
        </div>
        <div class="update-time van-hairline--bottom">
          <p class="layout-flex-between">
            <span>中国气象</span>
            <span>上次更新时间：下午17::25</span>
          </p>
        </div>
        <div class="time-stage layout-flex-between">
          <div class="stage-item" v-for="(item, index) in 12" :key="index">
            <p>傍晚5:00</p>
            <p>
              <img src="https://portal.fuyunfeng.top/files/weather2/1.png" alt="">
            </p>
            <p>14℃</p>
          </div>
        </div>
        <div class="week-list">
          <div class="day-item layout-flex-between van-hairline--bottom" :class="{'van-hairline--top': index === 0}" v-for="(item, index) in 12" :key="index">
            <span>3月5日星期五</span>
            <img src="https://portal.fuyunfeng.top/files/weather2/1.png" alt="">
            <span>15℃ / 8℃</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Sticky } from 'vant'
import { onActivated, ref } from 'vue'
// import { useRouter } from 'vue-router'
const app = {
  name: 'CityWeather',
  components: {
    [Sticky.name]: Sticky
  },
  setup() {
    onActivated(() => {
    })
    // const router = useRouter()

    const isFixed = ref(false)
    const pageScroll = data => {
      if (data.isFixed) {
        if (!isFixed.value) {
          isFixed.value = true
        }
        return
      }
      if (isFixed.value) {
        isFixed.value = false
      }
    }

    return {
      isFixed,
      pageScroll
    }
  }

}
export default app
</script>

<style lang="stylus" scoped>
.city-weather-container {
  height: 100%;
  background-image: url('./img/weather-bg.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .header {
    height: 50PX
  }

  .content {
    height: 100%;
    overflow: scroll;
    color: white;

    .city-weather {
      height: 100%;

      .city-info {
        height: 30%;
        margin-top 20%

        .city-container {
          width 100%
          text-align center

          .city-name {
            height 50PX
            margin 0;
          }
          .current-temperature {
            margin 0;
            .current-num {
              font-size 72PX
            }

            .temperature {
              vertical-align top
            }
          }
        }
      }

      .update-time {
        width 90%
        margin 0 auto
        padding 30PX 5PX 2PX 5PX
      }

      .time-stage {
        overflow-x auto
        .stage-item {
          flex: 0 0 90PX;
          text-align center;
          img {
            width 28PX
            heiught 28PX
          }
        }
      }

      .week-list {
        padding 0 4%
        .day-item {
          padding 20PX 0
          img {
            width 28PX
            heiught 28PX
          }
        }
      }
    }
  }
}
</style>
