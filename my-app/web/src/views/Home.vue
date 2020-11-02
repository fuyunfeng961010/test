<template>
  <div class="home">
    <van-list>
      <!-- <van-cell :value="item.count" is-link size="large" v-for="(item, index) in list" :key="index">
        <template #title>
          <span class="ball-item" v-for="(ball, ballIndex) in JSON.parse(item.key)" :key="ballIndex">{{ball}}</span>
        </template>
      </van-cell> -->
      <div class="list-item" v-for="(item, index) in list" :key="index">
        <div class="left">
          <div class="red">
            <span class="ball-item" v-for="(ball, ballIndex) in JSON.parse(item.key).slice(0, 6)"
          :key="ballIndex">{{ ball }}</span>
          </div>
          <div class="blue-ball">
            <span class="ball-item">{{ JSON.parse(item.key)[6] }}</span>
          </div>
        </div>
        <div class="right">{{ item.count }}</div>
      </div>
    </van-list>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
interface Item {
  key: string
  count: number
}

@Options({
  watch: {
  },
  mounted() {
    this.start()
  },
})
export default class Home extends Vue {
  list: Item[] = []
  loading: boolean = true
  finished: boolean = false
  statisticsList: Item[] = []

  start = () => {
    setInterval(() => {
      let getTwoColorBall = function () {
        const redList = [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
          '25',
          '26',
          '27',
          '28',
          '29',
          '30',
          '31',
          '32',
          '33',
        ]
        const blueList = [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
        ]
        let result: string[] = []
        while (result.length < 6) {
          const ranRed = Math.floor(Math.random() * 32 + 1)
          const redItem = redList[ranRed]
          if (!result.includes(redItem)) {
            result.push(redItem)
          }
        }
        const ranBlue = Math.floor(Math.random() * 15 + 1)
        result.sort().push(blueList[ranBlue])
        return JSON.stringify(result)
      }
      const resultAttr = getTwoColorBall()
      let setStatistics = () => {
        const index = this.statisticsList.findIndex(
          (item) => item.key == resultAttr
        )
        if (index != -1) {
          this.statisticsList[index].count++
          return
        }
        const item = {
          key: resultAttr,
          count: 1,
        }
        this.statisticsList.push(item)
        this.statisticsList.sort((a, b) => b.count - a.count)
      }
      setStatistics()
      console.log('statisticsList', this.statisticsList)
      this.list = this.statisticsList
    }, 2000)
  }
}
</script>
<style lang="stylus" scoped>
.home {
  height: 100%;
  overflow: auto;

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .red {
        width: 85%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .blue-ball {
        margin-left 5px
        border-left 1px solid #BBBBBB
        .ball-item {
          background #60A4FC
        }
      }

      .ball-item {
        display: inline-block;
        width: 25px;
        height: 25px;
        text-align center
        line-height 25px;
        border-radius: 50%;
        margin-left: 10px;
        background: #F27152;
        color: white;
      }
    }

    .right {
      width 20%;
      text-align center
      color #F27152
    }
  }
}
</style>
