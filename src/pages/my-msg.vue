<template>
  <div class="commont-view">
    <w-header v-if="true" titles="评价详情"></w-header>
    <scroller class="page-box" @loadmore="getComListMsg" loadmoreoffset="50">

      <div class="com-item-box">
        <image class="com-item-pic" :src="DATA.headpic"></image>
        <div class="com-item-right">
          <div class="com-box-s">
            <text class="com-s-name">{{DATA.nikename}}</text>
            <!-- <div class="com-z-box">
              <image class="com-z-ico" :src="icos"></image>
              <text v-if="false" class="com-z-txt">{{DATA.praisecount}}</text>
              <text v-if="true" class="com-z-txt blu">{{DATA.praisecount}}</text>
            </div> -->
          </div>

          <text class="com-b-msg">{{DATA.content}}</text>

          <div class="com-r-box">
            <text class="com-r-time">{{DATA.viewtime}}</text>
            <!-- <text class="com-r-cal">回复</text> -->
          </div>

        </div>
      </div>

      <div class="commit-tit">
        <div class="commit-s"></div>
        <text class="commit-m">评论</text>
      </div>

      <div>
        <div class="com-item-box" v-for="(items, index) in COMDATA">
          <image class="com-item-pic" :src="items.headpic"></image>
          <div class="com-item-right">
            <div class="com-box-s">
              <text class="com-s-name">{{items.nikename}}</text>
            </div>

            <text class="com-b-msg">{{items.content}}</text>

            <div class="com-r-box">
              <text class="com-r-time">{{items.viewtime}}</text>
              <!-- <text class="com-r-cal" @click="hideForm()">回复</text> -->
            </div>


          </div>
        </div>
      </div>
      
      <text class="indicator" v-if="showLoading">Loading ...</text>
      <text class="indicator" v-if="noLoading">～我是有底线滴～</text>

    </scroller>
    <text class="comment" @click="hideForm()">回复评论</text>

    <txt-frm v-if="showForm" @hides="hideForm" @save="saveForm"></txt-frm>
  </div>
</template>

<script>
  import WHeader from '../components/w-header.vue'

  import TxtFrm from '../components/txt.vue'
  import XHR from '../api'
  const modal = weex.requireModule('modal')
  export default {
    components: { WHeader, TxtFrm },
    data () {
      return {
        showLoading: false,
        noLoading: false,
        icos: 'https://s.kcimg.cn/app/icon/oxman/t-zan.png',
        zans: [
          'https://s.kcimg.cn/app/icon/oxman/t-zan.png',
          'https://s.kcimg.cn/app/icon/oxman/t-zanok.png',
        ],
        showForm: false,        // 回复弹窗
        cengIndex:0,            // index

        page:1,               // 当前页码
        pageSize: 10,        // 每页显示记录数
        cmtSum:0,           // 评论总数
        COMDATA:[],         // 评论列表
      }
    },
    computed: {
      DATA () {return this.$store.state.comDATA[this.$route.query.in]}
    },
    created (){
      this.getComListMsg()
    },
    methods: {
      hideForm (tp) { 
        this.showForm = !this.showForm
      },
      getComListMsg(){
        let self = this
        let json = {}
        json.topicid = this.$route.query.ic
        json.id = this.$route.query.tp
        json.CurrentPage = this.page
        json.pagesize = this.pageSize
        if(!this.noLoading && !this.showLoading){
          self.showLoading = true
          XHR.getComListMsg(json).then((res) => {
            if( res.data.status == '1'){
              self.showLoading = false
              
              if(res.data.comments.length < 10 ){
                self.COMDATA.push(...res.data.comments)
                self.noLoading = true
              } else {
                self.COMDATA.push(...res.data.comments)
              }
              // self.DATA = res.data.cmt_sum
              // self.outerCS = res.data.outer_cmt_sum
            } else {
              modal.toast({
                message: res.data.msg,
                duration: 2
              })
            }
          })
        }
      },
      saveForm(txt){
        let self = this
        let json = {}
        let ACT
        json.topicid = this.$route.query.id
        // json.topicid = this.topic.topicid
        json.content = txt

        json.parentid = this.DATA.id
        json.replyid = this.DATA.id
        json.touserid = this.DATA.userid

        if(this.$route.query.tp == '1'){
          ACT = 'postComSub'
        }
        XHR.postComSub(json).then((res) => {
          if( res.data.status == '1'){
            let resd = res.data.data
            resd.viewtime = self.getNowFormatDate()
            resd.praisecount = 0
            self.COMDATA.unshift(resd)
            self.cmtSum++
          } else {
            modal.toast({
              message: res.data.msg,
              duration: 2
            })
          }
        })
      },
      getNowFormatDate() {
          var date = new Date()
          var seperator1 = "/"
          var seperator2 = ":"
          var month = date.getMonth() + 1
          var strDate = date.getDate()
          if (month >= 1 && month <= 9) {
              month = "0" + month
          }
          if (strDate >= 0 && strDate <= 9) {
              strDate = "0" + strDate
          }
          var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                  + " " + date.getHours() + seperator2 + date.getMinutes()
                  + seperator2 + date.getSeconds()
          return currentdate
      },
    }
  }
</script>

<style scoped>
.commont-view{background-color: #f5f5f5;}
.page-box{flex:1;}


.commit-tit{height: 88px;flex-direction:row; justify-content:flex-start;align-items:center; border-bottom-style: solid;border-bottom-color: #eee;border-bottom-width: 2px; background-color:#f5f5f5; }
.commit-s{width: 4px;height: 36px; background-color: #2B61FF;margin-right: 26px;}
.commit-m{font-size: 32px; color: #111;}

.com-item-box{padding-top: 30px; padding-right: 30px; padding-left: 30px;flex-direction:row; justify-content:flex-start;align-items:flex-start;}
.com-item-pic{width: 64px; height: 64px; border-radius: 64px;}
.com-item-right{width: 626px; padding-left: 20px;padding-bottom: 30px;}
.com-box-s{height: 44px;flex-direction:row; justify-content:space-between;align-items:center;}
.com-s-name{font-size: 28px; color: #555;}
.com-z-box{flex-direction:row; justify-content:space-between;align-items:center;}
.com-z-ico{ width: 26px;height: 26px; margin-right: 10px;}
.com-z-txt{font-size: 24px; color: #999;}

.com-b-msg{font-size: 32px; color: #111;}

.com-r-box{flex-direction:row; justify-content:flex-start;align-items:center;}
.com-r-time{font-size: 24px; color: #999; margin-right: 26px;}
.com-r-cal{font-size: 28px; color: #43558A;}

.comment{ height: 98px; width: 750px; text-align: center; line-height: 98px;background-color: #FAFBFC; font-size: 36px; color: #999;}

.blu{color: #2A60FE;}

.indicator {
    height: 94px;
    color: #999;
    font-size: 32px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
</style>
