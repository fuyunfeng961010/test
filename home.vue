<template>
  <response-circle-view-template
    class="response-circle-home"
    :onLoad="onLoad"
    @refresh="refreshEmit"
  >
    <span slot="title">响应圈监控</span>
    <div slot="content" class="home-content">
      <div class="region-container">
        <div
          class="region-item flex-center"
          :class="{'region-item-select': index == regionSelect}"
          v-for="(item, index) in regionList"
          :key="index"
          @click="regionSelect = index; getParkList()"
        >
          <span>{{ item }}</span>
          <img src="./img/tick.png" alt class="tick" v-if="index == regionSelect" />
        </div>
      </div>

      <div class="park-container" ref="parkContainerRef">
        <div
          class="park-item"
          v-for="(park, pindex) in parkList"
          :key="pindex"
          @click="$router.push({path: '/response-circle/detail', query: {dc_name: park.park_name, dc_id: park.park_id, dcs: dcList[regionSelect].filter(item => item.park_id == park.park_id).map(item => item.dc_id).join(',')}})"
        >
          <park-item :parkInfo="park"></park-item>
        </div>
      </div>
    </div>
    <div slot="fixed-content"></div>
  </response-circle-view-template>
</template>

<script>
import ResponseCircleViewTemplate from '../components/response-circle-view-template.vue'
import ParkItem from './park-item.vue'
import { getDcsByAccount, getTeamList, getTeamListDuty, getTeamMember } from '../../../api/response-circle.js'
import coverageGray from './img/coverage-gray.png'
import coverageBlue from './img/coverage-blue.png'
export default {
  name: 'ResponseCircleHome',
  data() {
    return {
      regionSelect: 0,
      regionList: [],
      dcList: [],
      parkList: [],
      onLoad: false
    }
  },
  beforeRouteEnter(to, from, next) {
    // 详情页面返回不做加载
    next(vm => {
      if (from.path != '/response-circle/detail') {
        vm.onLoad = false
        vm.getDcsByAccount()
      }
    })
  },
  activated() {
  },
  components: {
    ResponseCircleViewTemplate,
    ParkItem
  },
  methods: {
    // 根据用户获取大区和数据中心信息
    getDcsByAccount() {
      getDcsByAccount(res => {
        // console.log('res', res)
        if (res.data.result) {
          let userDcList = res.data.records.fun_region_dc
          this.regionList = Object.keys(userDcList['oc_response_circle'])
          this.dcList = Object.values(userDcList['oc_response_circle']).map(
            item => item.dcs
          )
          // 动态的大区高度
          this.$nextTick(() => {
            let len = this.regionList.length
            if (len > 4) {
              let overage = len % 4
              let row = (len - overage) / 4
              this.$refs.parkContainerRef.style.maxHeight = 'calc(100% - (85PX + ' + (row * 50 - 10) + 'px)'
            } else {
              this.$refs.parkContainerRef.style.maxHeight = 'calc(100% - (85PX)'
            }
          })
          this.getParkList()
        }
      })
    },
    getParkList() {
      this.parkList = []
      this.onLoad = true
      let dcs = this.dcList[this.regionSelect]
      // 园区去重
      function unique(objArray) {
        let hash = {}
        objArray = objArray.reduce((item, next) => {
          if (!hash[next.park_id]) {
            hash[next.park_id] = true
            item.push(next)
          }
          return item
        }, [])
        return objArray
      }
      let parks = unique(dcs).filter(item => item.park_id).map(item => ({ park_id: item.park_id, park_name: item.park_name, dc_id: item.dc_id }))
      console.log('parks', parks)

      let getTeamListFn = (params, dcId, index) => {
        return new Promise((resolve, reject) => {
          getTeamList(params, res => {
            if (res.data.result) {
              let records = res.data.records
              if (records.length) {
                records.forEach(item => {
                  item['dcId'] = dcId
                  item['index'] = index
                })
              }
              resolve(records)
            }
            reject(new Error('!result'))
          })
        })
      }

      let getTeamListDutyFn = (params, dcId, index) => {
        return new Promise((resolve, reject) => {
          getTeamListDuty(params, res => {
            if (res.data.result) {
              let records = res.data.records
              if (records.length) {
                records.forEach(item => {
                  item['dcId'] = dcId
                  item['index'] = index
                  item['teamId'] = params.team_id
                })
              }
              resolve(records)
            }
            reject(new Error('!result'))
          })
        })
      }

      let getTeamMemberFn = (params, index) => {
        return new Promise((resolve, reject) => {
          getTeamMember(params, res => {
            if (res.data.result) {
              let records = res.data.records
              records['index'] = index
              resolve(records)
            }
            reject(new Error('!result'))
          })
        })
      }

      // 值班团队
      let promisesTeam = parks.map((park, index) => {
        park['dutyMembers'] = []
        park['members'] = []
        park['undutyMembers'] = []
        let params = {
          t_type: 3,
          dc_id: dcs.filter(item => item.park_id == park.park_id).map(item => item.dc_id).join(',')
        }
        return getTeamListFn(params, park.dc_id, index)
      })
      return Promise.all(promisesTeam).then(tems => {
        // 存在团队的当班信息
        console.log('tems', tems)
        let promisesDuty = tems.filter(item => item.length).map(team => {
          let params = {
            team_id: team.map(item => item.id).join(',')
          }
          return getTeamListDutyFn(params, team[0].dcId, team[0].index)
        })
        return Promise.all(promisesDuty).then(dutys => {
          console.log('dutys', dutys)
          let promisesDuty = dutys.filter(item => item.length).map(duty => {
            let params = {
              dc_id: duty[0].dcId,
              team_id: duty[0].teamId,
              duty_id: duty.map(item => item.dutyId).join(',')
            }
            return getTeamMemberFn(params, duty[0].index)
          })
          return Promise.all(promisesDuty).then(member => {
            console.log('member', member)
            member.forEach((memberItem, index) => {
              console.log('memberItem', memberItem)
              let park = parks[memberItem.index]
              park['dutyMembers'] = memberItem.duty_members
              park['members'] = memberItem.members
              park['undutyMembers'] = memberItem.unduty_members
              this.$set(parks, memberItem.index, park)
              console.log('parks', parks)
            })
            console.log('over')
            this.setParks(1, parks)
          })
        })
      })

      // 异步循环 判断执行结束
      // let flagLen = 1
      // parks.forEach((park, index) => {
      //   flagLen += 1
      //   park['dutyMembers'] = []
      //   park['members'] = []
      //   park['undutyMembers'] = []
      //   let params = {
      //     t_type: 3,
      //     dc_id: dcs.filter(item => item.park_id == park.park_id).map(item => item.dc_id).join(',')
      //   }
      //   // 首先查询值班团队
      //   getTeamList(params, res => {
      //     if (res.data.result && res.data.records.length) {
      //       let teamId = res.data.records.map(item => item.id).join(',')
      //       // 查询值班团队的当班信息
      //       getTeamListDuty({ team_id: teamId }, res => {
      //         if (res.data.result && res.data.records.length) {
      //           let dutyId = res.data.records.map(item => item.dutyId).join(',')
      //           // 查询值班团队成员
      //           getTeamMember({ dc_id: park.dc_id, team_id: teamId, duty_id: dutyId }, res => {
      //             // console.log('getTeamMember', res)
      //             if (res.data.result) {
      //               let recordsMember = res.data.records
      //               park['dutyMembers'] = recordsMember.duty_members
      //               park['members'] = recordsMember.members
      //               park['undutyMembers'] = recordsMember.unduty_members
      //               this.$set(parks, index, park)
      //               flagLen -= 1
      //               this.setParks(flagLen, parks)
      //             } else {
      //               flagLen -= 1
      //               this.setParks(flagLen, parks)
      //             }
      //           })
      //         } else {
      //           flagLen -= 1
      //           this.setParks(flagLen, parks)
      //         }
      //       })
      //     } else {
      //       flagLen -= 1
      //       this.setParks(flagLen, parks)
      //     }
      //   })
      // })
    },
    setParks(flagLen, parks) {
      if (flagLen == 1) {
        let sortFn = (a, b) => {
          let abnormalNumA = a.dutyMembers.filter(item => item.is_excpet == 1).length
          let abnormalNumB = b.dutyMembers.filter(item => item.is_excpet == 1).length

          let coverageA = !a.dutyMembers.length ? 0 : Math.round((a.dutyMembers.length - abnormalNumA) / a.dutyMembers.length * 100)
          let coverageB = !b.dutyMembers.length ? 0 : Math.round((b.dutyMembers.length - abnormalNumB) / b.dutyMembers.length * 100)
          if (abnormalNumA === abnormalNumB) {
            if (coverageA < coverageB) {
              return 1
            } else if (coverageA > coverageB) {
              return -1
            } else {
              return 0
            }
          } else {
            if (abnormalNumA < abnormalNumB) {
              return 1
            } else {
              return -1
            }
          }
        }
        this.parkList = parks.sort(sortFn)
        this.onLoad = false
        console.log('this.parkList', JSON.parse(JSON.stringify(this.parkList)))
      }
    },
    refreshEmit() {
      this.getParkList()
    }
  },
  computed: {
    articleShow() {
      return index => {
        return index > 5 ? coverageBlue : coverageGray
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/style/var.styl';

.response-circle-home {
  .menu-right {
    position: absolute;
    right: 40px;

    img {
      width: 40px;
      height: 40px;
    }
  }

  .home-content {
    height: calc(100% - 180px);
    color: #D5F9FF;
    font-size: $font-size-smallX;
    padding: 0 2.5%;
    overflow: scroll;

    .flex-center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .flex-space-between {
      display: flex;
      justify-content: space-between;
    }

    .region-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 25PX;
      margin-bottom: 20PX;
      min-height: 40PX;
      // max-height 40PX
      padding: 0 2.5%;

      .region-item-select {
        background-image: url('./img/region-select.png') !important;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-top: -8px;
      }

      .region-item {
        width: 24%;
        height: 53px;
        background-image: url('./img/region.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        color: #133B60;
        margin-bottom: 10PX;

        .tick {
          width: 25px;
          height: 25px;
          margin-left: 5px;
        }
      }

      .region-item:last-child:nth-child(4n - 1) {
        margin-right: calc(24% + 4% / 3);
      }

      .region-item:last-child:nth-child(4n - 2) {
        margin-right: calc(48% + 8% / 3);
      }
    }

    .park-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      // height calc(100% - 45PX - 40PX)
      overflow: scroll;
      font-size: $font-size-smallX;

      .park-item {
        width: 41%;
        height: 215px;
        padding: 5.5% 3.5% 3.5% 3.5%;
        background-image: url('./img/park.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        color: #D5F9FF;
        margin-bottom: 20px;
      }
    }
  }
}
</style>