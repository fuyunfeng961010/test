<template>
  <div class="city-weather-container">
    <div class="content font-size-16">
      <div class="city-weather">
        <div class="city-info layout-flex-center">
          <div class="city-container">
            <van-sticky>
              <p class="city-name layout-flex-center">
                <span class="font-size-20">浦东新区</span>
                <i class="iconfont icondidian font-size-22  offset-px-ml-5"></i>
              </p>
            </van-sticky>
            <p class="current-temperature">
              <span class="current-num">14</span>
              <span class="temperature font-size-26 offset-px-ml-10">℃</span>
            </p>
            <p class="font-size-14">
              <span class="">15℃ / </span>
              <span class="">4℃</span>
            </p>
            <p class="font-size-16">晴 空气良</p>
          </div>
        </div>
        <div class="update-time van-hairline--bottom font-size-14">
          <p class="layout-flex-between">
            <span>中国气象</span>
            <span>上次更新时间：下午17::25</span>
          </p>
        </div>
        <div class="time-stage layout-flex-between font-size-14">
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
        <div class="divider">
          <van-divider style="color: white;">生活指数</van-divider>
        </div>
        <div class="life-index">
          <van-tabs background="#768CA1" title-inactive-color="white" title-active-color="white" v-model:active="lifeIndex">
            <van-tab v-for="({title}, index) in lifeList" :title="title" :key="index" title-style="font-size: 16px;">
              内容 {{ index }}
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Sticky, Divider, Tab, Tabs } from 'vant'
import { onActivated, reactive, ref } from 'vue'
import { test } from '@/api/cityWeather.js'
// import { useRouter } from 'vue-router'
const app = {
  name: 'CityWeather',
  components: {
    [Sticky.name]: Sticky,
    [Divider.name]: Divider,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  setup() {
    onActivated(() => {
      console.log('test', test)
      const params = {
        url: '/test'
      }
      test(params)
        .then(res => {
          console.log('res', res)
        })
    })
    // const router = useRouter()

    const lifeIndex = ref(3)
    const lifeList = reactive([
      {
        title: '空调指数'
      },
      {
        title: '运动指数'
      },
      {
        title: '紫外线指数'
      },
      {
        title: '感冒指数'
      },
      {
        title: '洗车指数'
      },
      {
        title: '空气指数'
      },
      {
        title: '穿衣指数'
      }
    ])
    return {
      lifeIndex,
      lifeList
    }
  }

}
export default app
</script>

<style lang="stylus" scoped>
.city-weather-container {
  height: 100%;
  // background-image: url('./img/weather-bg6.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background linear-gradient(to bottom, #517E95 0%, #768CA1 80%)

  .content {
    height: calc(100% - 70PX);
    margin-top 65PX;
    overflow: scroll;
    color: white;

    .city-weather {
      padding-bottom 30PX

      .city-info {
        height: 30%;
        margin-top 10%

        .city-container {
          width 100%
          text-align center

          .city-name {
            height 60PX
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

      .divider {
        padding 0 4%
      }

      .life-index {
        padding 0 4%
      }
    }
  }
}
</style>
