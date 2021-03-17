<template>
  <div class="constellation-container">
    <div class="content font-size-14" ref="constellContentRef">
      <div class="constellation">
        <div
          class="constell-info layout-flex-center"
          :style="{ color: constellInfo.astro_color }"
        >
          <div class="constell-container font-size-16">
            <img
              v-if="constellInfo.astroid"
              :src="require(`./img/${constellInfo.astroid}.jpg`)"
              alt=""
              class="constell-img"
            />
            <div class="name-date">
              <div class="offset-px-mt-10">{{constellInfo.astro_ename}}</div>
              <div class="offset-px-mt-10">{{constellInfo.date && constellInfo.date.replace(/-/g, '.').replace(/~/g, '-')}}</div>
            </div>
          </div>
        </div>
        <div
          class="luck-container layout-flex-around"
          :style="{ color: constellInfo.astro_color }"
        >
          <div>
            <div>褐色</div>
            <div class="luck-lable">幸运颜色</div>
          </div>
          <div>
            <div>3</div>
            <div class="luck-lable">幸运数字</div>
          </div>
          <div>
            <div>双子</div>
            <div class="luck-lable">幸运星座</div>
          </div>
        </div>
        <div class="split-line"></div>
        <div class="fortune-list">
          <van-tabs
            background="#333137"
            title-inactive-color="#848486"
            title-active-color="white"
            :animated="true"
            v-model:active="fortuneIndex"
          >
            <van-tab
              v-for="(item, index) in fortuneList"
              :title="item.name"
              :key="index"
              title-style="font-size: 14px;"
            >
              <div class="fortune-content">{{ item.value }}</div>
            </van-tab>
          </van-tabs>
        </div>
        <div class="fortune-interval">
          <div class="layout-flex-between">
            <span>今日运势</span>
            <i class="iconfont iconarrow-right left-arrow"></i>
          </div>
          <div class="offset-px-mt-10 interval-content">
            {{constellInfo?.today?.presummary}}
          </div>
        </div>
        <div class="fortune-interval">
          <div class="layout-flex-between">
            <span>本周运势</span>
            <i class="iconfont iconarrow-right left-arrow"></i>
          </div>
          <div class="offset-px-mt-10 interval-content">
            {{constellInfo?.week?.career}}
          </div>
        </div>
        <div class="fortune-interval">
          <div class="layout-flex-between">
            <span>本月运势</span>
            <i class="iconfont iconarrow-right left-arrow"></i>
          </div>
          <div class="offset-px-mt-10 interval-content">
            {{constellInfo?.month?.summary}}
          </div>
        </div>
        <div class="fortune-interval other-constell">
          <div class="layout-flex-between">
            <span>看看其他星座</span>
          </div>
          <div class="constell-list layout-flex-between offset-px-mt-10">
            <div
              class="constell-item layout-flex-center"
              :class="{ 'offset-px-ml-10': index > 0 }"
              :style="{'backgroundImage': `url(${require(`./img/${item.astroid}.jpg`)})`}"
              v-for="(item, index) in constellList"
              :key="index"
              @click="otherConstell(item.astroname)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Sticky, Divider, Tab, Tabs } from 'vant'
import { onActivated, reactive, ref, toRefs, getCurrentInstance } from 'vue'
import { getConstellation, getConstellList } from '@/api/aliy.js'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
const app = {
  name: 'Constellation',
  components: {
    [Sticky.name]: Sticky,
    [Divider.name]: Divider,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  setup() {
    onActivated(() => {
      document.title = '星座'
      getConstellationListInfo()
      getConstellationInfo()
    })

    onBeforeRouteUpdate((to) => {
      getConstellationInfo(to.query.key)
      getConstellationListInfo()
      backTop()
    })

    const route = useRoute()
    const router = useRouter()
    const { $Moment, $origin: origin } = getCurrentInstance().appContext.config.globalProperties
    const constellContentRef = ref(null)

    const dateFormat = (date, format) => {
      return new $Moment(date).format(format)
    }

    const constellData = reactive({
      constellList: [],
      constellInfo: {},
      fortuneList: [],
      fortuneIndex: 0
    })
    const getConstellationListInfo = () => {
      getConstellList()
        .then(res => {
          if (res.data.result) {
            constellData.constellList = res.data.data.filter(item => item.astroname !== route.query.key)
          }
        })
    }

    const getConstellationInfo = (key = route.query.key) => {
      const params = {
        key
      }
      getConstellation(params)
        .then(res => {
          if (res.data.result) {
            const data = res.data.data
            constellData.constellInfo = data
            constellData.fortuneList = [
              {
                name: '综合运势',
                value: data.year.summary
              },
              {
                name: '财运运势',
                value: data.year.money
              },
              {
                name: '工作运势',
                value: data.year.career
              },
              {
                name: '爱情运势',
                value: data.year.love
              }
            ]
            console.log('constellInfo', res.data.data)
          }
        })
    }

    const backTop = () => {
      const timer = setInterval(() => {
        const scrollTop = constellContentRef._value.scrollTop
        constellContentRef._value.scrollTop = scrollTop - 20
        if (scrollTop <= 0) {
          clearInterval(timer)
        }
      }, 10)
    }

    const otherConstell = target => {
      console.log('target', target)
      router.push({
        path: '',
        query: {
          key: target
        }
      })
    }

    return {
      ...toRefs(constellData),
      dateFormat,
      origin,
      otherConstell,
      constellContentRef
    }
  }

}
export default app
</script>

<style lang="stylus" scoped>
.constellation-container {
  height: 100%;
  // background-image: url('./img/weather-bg6.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  // background: linear-gradient(to bottom, #517E95 0%, #768CA1 80%);
  background: #333137;

  .content {
    height: 100%;
    overflow: scroll;
    color: white;
    padding: 0 2.5%;

    .constellation {
      padding-bottom: 15PX;

      .constell-info {
        height: 260PX;
        margin-top: 5%;

        .constell-container {
          width: 100%;
          height: 100%;
          text-align: center;
          position: relative;

          .constell-img {
            width: 100%;
            height: 100%;
          }

          .name-date {
            position: absolute;
            bottom: 20PX;
            left: 50%;
            transform: translateX(-50%);
            letter-spacing: 5px;
            opacity: 0.9;
          }
        }
      }

      .luck-container {
        padding: 10PX 2.5% 20PX 2.5%;

        > div {
          text-align: center;

          .luck-lable {
            font-size: 12PX;
            opacity: 0.5;
            margin-top: 5PX;
          }
        }
      }

      .split-line {
        border-bottom: 1px dotted #413f44;
        margin: 20px auto 0;
      }

      .fortune-list {
        /deep/.van-tabs__line {
          background-color: transparent !important;
          width: 0 !important;
          height: 0 !important;
          margin: 0 auto !important;
          border-left: 6px solid transparent !important;
          border-right: 6px solid transparent !important;
          border-bottom: 6px solid #4f4c54 !important;
        }

        .fortune-content {
          border: 1px solid #4f4c54;
          color: #f5f5f5;
          // position: absolute;
          padding: 2% 3%;
        }
      }

      .fortune-interval {
        color: #848486;
        margin-top: 20PX;

        .interval-content {
          color: white;
        }
      }

      .other-constell {
        .constell-list {
          overflow-x: auto;

          .constell-item {
            flex: none;
            // text-align center;
            overflow-x: hidden;
            width: 80PX;
            height: 80PX;
            border-radius: 50%;
            border: 1px solid;
            background-repeat: no-repeat;
            // background-attachment: fixed;
            background-size: 185% 120%;
            background-position: 50% 5%;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
