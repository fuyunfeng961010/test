<template>
  <div class="city-weather-container">
    <div class="content font-size-16">
      <div class="city-weather">
        <div class="city-info layout-flex-center">
          <div class="city-container">
            <van-sticky>
              <p class="city-name layout-flex-center">
                <span class="font-size-20">{{weatherInfo.city}}</span>
                <i class="iconfont icondidian font-size-22  offset-px-ml-5"></i>
              </p>
            </van-sticky>
            <p class="current-temperature">
              <span class="current-num">{{weatherInfo.temp}}</span>
              <span class="temperature font-size-26 offset-px-ml-10">℃</span>
            </p>
            <p class="font-size-14">
              <span class="">{{weatherInfo.temphigh}}℃ / </span>
              <span class="">{{weatherInfo.templow}}℃</span>
            </p>
            <p class="font-size-16">{{weatherInfo.weather}} 空气{{weatherInfo.aqi?.quality}}</p>
          </div>
        </div>
        <div class="update-time van-hairline--bottom font-size-14">
          <p class="layout-flex-between">
            <span>中国气象</span>
            <span>上次更新时间：{{weatherInfo.updatetime}}</span>
          </p>
        </div>
        <div class="time-stage layout-flex-between font-size-14">
          <div class="stage-item" v-for="(item, index) in weatherInfo.hourly" :key="index">
            <p>{{item.time}}</p>
            <p>
              <img :src="`https://portal.fuyunfeng.top/files/weather2/${item.img}.png`" alt="">
            </p>
            <p>{{item.temp}}℃</p>
          </div>
        </div>
        <div class="week-list">
          <div class="day-item layout-flex-between van-hairline--bottom" :class="{'van-hairline--top': index === 0}" v-for="(item, index) in weatherInfo.daily" :key="index">
            <span>{{dateFormat(item.date, 'M月D日')}}{{item.week}}</span>
            <img :src="`https://portal.fuyunfeng.top/files/weather2/${item.day.img}.png`" alt="">
            <span>{{item.day.temphigh}}℃ / {{item.night.templow}}℃</span>
          </div>
        </div>
        <div class="divider">
          <van-divider style="color: white;">生活指数</van-divider>
        </div>
        <div class="life-index">
          <van-tabs background="#768CA1" title-inactive-color="white" title-active-color="white" v-model:active="lifeIndex">
            <van-tab v-for="(item, index) in weatherInfo.index" :title="item.iname" :key="index" title-style="font-size: 16px;">
              <div class="offset-px-mt-10">{{item.ivalue}}, {{item.detail}}</div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Sticky, Divider, Tab, Tabs } from 'vant'
import { onActivated, reactive, ref, toRefs, getCurrentInstance } from 'vue'
import { getCityWeather } from '@/api/cityWeather.js'
import { useRoute } from 'vue-router'
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
      getWeatherInfo()
    })

    const route = useRoute()
    const { $Moment } = getCurrentInstance().appContext.config.globalProperties

    const dateFormat = (date, format) => {
      return new $Moment(date).format(format)
    }

    const lifeIndex = ref(3)
    const weatherData = reactive({
      weatherInfo: {}
    })
    const getWeatherInfo = () => {
      console.log('route', route.query.city)
      const params = {
        city: route.query.city
      }
      getCityWeather(params)
        .then(res => {
          if (res.data.result) {
            weatherData.weatherInfo = res.data.data
            console.log('weatherInfo', res.data.data)
          }
        })
    }

    return {
      lifeIndex,
      ...toRefs(weatherData),
      dateFormat
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
