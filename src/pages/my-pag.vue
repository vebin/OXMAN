<template>
  <div class="commont-view">
    <w-header v-if="true" titles="文章详情"></w-header>
    <scroller class="page-box">
      <div v-if="$route.query.tp == '1' && isnull" class="main-box">
        <text class="min-title">{{DATA.bu_title}}</text>

        <div class="min-btn-box">
          <div class="min-pic">
          <image class="min-pic"
            resize="contain"
            :src="DATA.bu_authorimgurl"
            @click="jump({path:'/proc',query:{id: DATA.bu_authorid}})"></image>
          </div>
          <div class="min-msg">
            <text class="min-msg-name">{{DATA.bu_author}}</text>
            <text class="min-msg-time">{{DATA.bu_publishdatetime | dataTimeFgo}}</text>
          </div>

          <div v-if="!DATA.bu_isfollower" class="min-msg-btn" @click="singleFollowed(1)">
            <image class="min-btm-ico" src="https://s.kcimg.cn/app/icon/oxman/gzg.png"></image>
            <text class="min-btn-name">关注</text>
          </div>

          <div v-if="DATA.bu_isfollower" class="min-msg-btn min-ok" @click="singleFollowed(2)">
            <text class="min-btn-name-ok">已关注</text>
          </div>

        </div>


        <div v-if="!DATA.bu_isfollower" class="alt-min-box">
          <text class="alt-txt">点击右上方关注按钮，立刻关注吧！～</text>
          <div class="alt-san"></div>
        </div>
        <div v-for="(em, index) in DATA.bu_content">
          <text v-if="em.text" class="min-min-txt">{{em.text}}</text>
          <image v-if="em.img" resize="cover" class="min-min-img" :src="em.img"></image>
        </div>
      </div>




      <div v-if="$route.query.tp == '0' && isnull" class="main-box">
        <text class="min-title">{{DATA.subject}}</text>

        <div class="min-btn-box">
          <div class="min-pic">
          <image class="min-pic"
            resize="contain"
            :src="userdata.bu_authorimgurl"
            @click="jump({path:'/proc',query:{id: userdata.bu_authorid}})"></image>
          </div>
          <div class="min-msg">
            <text class="min-msg-name">{{userdata.bu_author}}</text>
            <text class="min-msg-time">{{DATA.dateline | dataTimeFgo}}</text>
          </div>

          <div v-if="!isflow" class="min-msg-btn" @click="singleFollowed(1)">
            <image class="min-btm-ico" src="https://s.kcimg.cn/app/icon/oxman/gzg.png"></image>
            <text class="min-btn-name">关注</text>
          </div>

          <div v-if="isflow" class="min-msg-btn min-ok" @click="singleFollowed(2)">
            <text class="min-btn-name-ok">已关注</text>
          </div>

        </div>


        <div v-if="!isflow" class="alt-min-box">
          <text class="alt-txt">点击右上方关注按钮，立刻关注吧！～</text>
          <div class="alt-san"></div>
        </div>
        <text class="min-min-txt">{{DATA.message}}</text>
        <div class="min-min-img" v-for="(em, index) in DATA.pics">
          <image resize="contain" class="min-min-img" :src="em"></image>
        </div>
        <text class="min-min-txt"></text>

      </div>









      <div class="commit-tit">
        <div class="commit-s"></div>
        <text class="commit-m">评论</text>
      </div>

      <div class="com-item-box" v-for="(items, index) in COMDATA">
        <div class="com-item-pic">
        <image class="com-item-pic" resize="contain" :src="items.headpic"></image>
        </div>
        <div class="com-item-right">
          <div class="com-box-s">
            <text class="com-s-name">{{items.nikename}}</text>
            <!-- <div class="com-z-box">
              <image class="com-z-ico" :src="icos"></image>
              <text v-if="false" class="com-z-txt">{{items.praisecount}}</text>
              <text v-if="false" class="com-z-txt blu">{{items.praisecount}}</text>
            </div> -->
          </div>

          <text class="com-b-msg" @click="jump({path:'/comment',query:{id:$route.query.id,ic:topic.topicid,tp:items.id,in:index,xo:$route.query.tp}})">{{items.content}}</text>

          <div class="com-r-box">
            <text class="com-r-time">{{items.viewtime}}</text>
            <text class="com-r-cal" @click="hideForm(index)">回复</text>
          </div>

          <div v-if="items.comments.length > 0" class="com-mi-box">
            <text class="com-mi-txt" @click="jump({path:'/comment',query:{id:$route.query.id,ic:topic.topicid,tp:items.id,in:index,xo:$route.query.tp}})">共{{items.comments.length}}条回复……</text>
            <div class="com-mi-san"></div>
          </div>

        </div>
      </div>

      <text class="indicator">～我是有底线滴～</text>
    </scroller>
    <bot-nav :DATA="DATA" :SUM="cmtSum" @hides="hideForm" @cite="upVote" :num="num" :islike="bu_islike"></bot-nav>

    <txt-frm v-if="showForm" @hides="hideForm" @save="saveForm"></txt-frm>
  </div>
</template>

<script>
  import WHeader from '../components/w-header.vue'
  import BotNav from '../components/bottom-nav.vue'
  import TxtFrm from '../components/txt.vue'

  import XHR from '../api'
  const modal = weex.requireModule('modal')
  export default {
    components: { WHeader, BotNav, TxtFrm },
    data () {
      return {
        icos: 'https://s.kcimg.cn/app/icon/oxman/t-zan.png',
        zans: [
          'https://s.kcimg.cn/app/icon/oxman/t-zan.png',
          'https://s.kcimg.cn/app/icon/oxman/t-zanok.png',
        ],
        showForm: false,        // 回复弹窗
        cengCom: false,        // 是否是回复楼层
        cengIndex:0,            // index

        page:1,               // 当前页码
        pageSize: 10,        // 每页显示记录数
        cmtSum:0,           // 评论总数
        outerCS:0,      // 一级评论记录总数
        COMDATA:[],         // 评论列表

        DATA:{},            // 文章详情

        topic:{}, // 评论信息接口(getTopic)
        xxx:'',
        isflow: false,   //  圈子时判断是否关注
        num: 0,    // 点赞数
        bu_islike:false,  //  是否点赞
        isnull: false, // 是否加载完毕
        userdata:{}   //  圈子主人信息
      }
    },
    created () {
      weex.requireModule('THAW').onShowLoading()
      this.getNewsMsg()
      this.getTopic()
      weex.requireModule('globalEvent')
      .addEventListener('onGoLoginCallBack',(res) => {
        if(res.status == '1'){
            this.$store.commit('setAPPSTR',res.auth)
            this.$store.commit('setNbuid',res.userId)
            this.jump('/home')
        }
      })
    },
    methods: {
      hideForm (tp) {
        if (tp > -1 && tp != 'msg') {
          this.cengCom = true
          this.cengIndex = tp
        }
        if(this.cengCom && tp == 'msg'){
          this.cengCom = false
        }

        if(this.$store.state.userId != 0){
          this.showForm = !this.showForm
        } else {
          weex.requireModule('THAW').onGoLogin()
        }
      },
      // 获取页面评论信息接口
      getTopic (){
        let self = this
        let json = {}
        json.articleid = this.$route.query.id
        json.siteid = 5
        if(this.$route.query.tp == '1'){
          json.siteid = 2
        }
        json.title = this.$store.state.comTitle
        json.url = this.$store.state.comUrl

        // if (this.$getConfig().UA !== 0) {
        //   json.UA = this.$getConfig().UA
        // }
        XHR.getTopic(json).then((res) => {
          if( res.data.status == '1'){
            self.topic = res.data
            self.getNewsComList()
          } else {
            modal.toast({
              message: res.data.msg,
              duration: 2
            })
          }
        })
      },
      getNewsMsg(){
        let self = this
        let json = {}
        if(this.$route.query.tp == '1'){
          json.id = this.$route.query.id
          XHR.getNewsMsg(json).then((res) => {
            if( res.data.status == '1'){
              res.data.data.bu_content = res.data.data.bu_content
              self.DATA = res.data.data
              self.num = res.data.data.bu_like
              self.bu_islike = res.data.data.bu_islike
              weex.requireModule('THAW').onHideLoading()
              self.isnull = true
            } else {
              weex.requireModule('THAW').onHideLoading()
              modal.toast({
                message: res.data.msg,
                duration: 2
              })
            }
          })
        } else {
          json.tid = this.$route.query.id
          XHR.nrGeti({id:this.$route.query.id}).then((res) => {
            if(res.data.status == '1'){
              this.isflow = res.data.data.bu_isfollower
              this.userdata = res.data.data
            } else {
              modal.toast({
                message: res.data.msg,
                duration: 2
              })
            }
          })

          XHR.getTmsgInfo(json).then((res) => {
            if( res.data.status == '0'){
              self.DATA = res.data.data
              self.DATA.dateline = self.DATA.dateline*1000
              weex.requireModule('THAW').onHideLoading()
              self.isnull = true
            } else {
              weex.requireModule('THAW').onHideLoading()
              modal.toast({
                message: res.data.msg,
                duration: 2
              })
            }
          })

          XHR.cursHget({id:this.$route.query.id}).then((res) => {
            if( res.data.status == '1'){
              self.num = res.data.data.bu_count
              self.bu_islike = res.data.data.bu_islike
            } else {
              modal.toast({
                message: res.msg,
                duration: 2
              })
            }
          })

        }
      },
      //单个关注
      singleFollowed(type){
        let self = this
        let json = {}
        json.type = type
        json.watchtype = 3
        if(this.$route.query.tp == '1'){
          json.nbbsid = `[${this.DATA.bu_authorid}]`
        } else {
          json.nbbsid = `[${this.userdata.bu_authorid}]`
        }
        XHR.postAttention(json).then((ele) => {
          if(ele.data.status == 1){
            if(this.$route.query.tp == '1'){
              self.DATA.bu_isfollower = !self.DATA.bu_isfollower
            } else {
              self.isflow = !self.isflow
            }
          } else {
            if(self.$store.state.userId != 0){
                modal.toast({
                  message: res.data.msg,
                  duration: 2
                })
            } else{
              weex.requireModule('THAW').onGoLogin()
            }
            
          }
        });
      },
      getNewsComList(){
        let self = this
        let json = {}
        json.topicid = this.topic.topicid
        json.CurrentPage = this.page
        json.pagesize = this.pageSize
        XHR.getNewsComList(json).then((res) => {
          if( res.data.status == '1'){
            self.COMDATA.push(...res.data.comments)
            self.$store.commit('setComDATA',self.COMDATA)
            self.cmtSum = res.data.cmt_sum
            self.outerCS = res.data.outer_cmt_sum
          } else {
            modal.toast({
              message: res.data.msg,
              duration: 2
            })
          }
        })
      },
      saveForm(txt){
        let self = this
        let json = {}
        let ACT
        self.showForm = false
        weex.requireModule('THAW').onHideSoftKeyboard()
        json.topicid = this.$route.query.id
        // json.topicid = this.topic.topicid
        json.content = txt
        json.parentid = 0
        json.replyid = 0
        json.touserid = 0
        json.type = 5
        if(this.cengCom){
          json.parentid = this.COMDATA[this.cengIndex].id
          json.replyid = this.COMDATA[this.cengIndex].id
          json.touserid = this.COMDATA[this.cengIndex].userid
        }
        if(this.$route.query.tp == '1'){
          ACT = 'postComSub'
          json.type = 2
        }
        XHR.postComSub(json).then((res) => {
          if( res.data.status == '1'){
            let resd = res.data.data
            resd.viewtime = self.getNowFormatDate()
            if(json.replyid == 0){
              resd.comments = []
              self.COMDATA.unshift(resd)
            } else {
              self.COMDATA[self.cengIndex].comments.unshift(resd)
            }
            self.cmtSum++
            
          } else {
            modal.toast({
              message: res.data.msg,
              duration: 2
            })
          }
        })
      },
      upVote(){
        let self = this
        let json = {}
        let ACS = 'getPcd'
        if(this.$route.query.tp == '0'){
            ACS = 'cursGet'
        }
        json.id = this.$route.query.id
        if(!this.bu_islike){
          XHR[ACS](json).then((res) => {
            if( res.data.status == '1'){
              self.bu_islike = true
              if(this.$route.query.tp == '0'){
                self.num = self.num + 1
              } else {
                self.DATA.bu_like++
              }
            } else {
              if(self.$store.state.userId != 0){
                modal.toast({
                  message: res.data.msg,
                  duration: 2
                })
              } else{
                weex.requireModule('THAW').onGoLogin()
              }
              
            }
          })
        }
      },
      getNowFormatDate() {
          let date = new Date()
          let year = date.getFullYear()
          let month = date.getMonth() + 1
          let day = date.getDate()
          let hours = date.getHours()
          let minutes = date.getMinutes()
          let second = date.getSeconds()
          const zerofill = val => val >= 10 ? val : '0' + val
          return `${year}/${zerofill(month)}/${zerofill(day)} ${zerofill(hours)}:${zerofill(minutes)}:${zerofill(second)}`
      },
    }
  }
</script>

<style scoped>
.commont-view{background-color: #fff;}
.page-box{flex:1;}
.main-box{padding-left: 30px;padding-top: 30px;padding-right: 30px;padding-bottom: 30px;border-bottom-style: solid; border-bottom-color: #f5f5f5; border-bottom-width: 20px;}
.min-title{font-size: 40px; color: #333;}

.min-btn-box{flex-direction:row; justify-content:space-between;align-items:center;padding-top: 20px; padding-bottom: 20px;}
.min-pic{ width: 72px; height: 72px; border-radius: 72px;}
.min-msg{flex:1;padding-left: 10px;}
.min-msg-name{font-size: 28px; color: #333;}
.min-msg-time{font-size: 24px; color: #999;}
.min-msg-btn{width: 128px; height: 52px; background-color: #2B61FF; border-width: 2px; border-color: #2B61FF; border-style: solid;flex-direction:row; justify-content:center;align-items:center; border-radius: 8px;}
.min-btm-ico{width: 24px;height: 24px; margin-right: 10px;}
.min-btn-name{color: #fff;font-size: 28px;}
.min-btn-name-ok{color: #999;font-size: 28px;}
.min-ok{background-color: #fff; border-color: #999;}


.alt-min-box{background-color: #d0daf9; height: 64px; position: relative; border-radius: 8px;}
.alt-txt{font-size: 24px; color: #2B61FF; text-align: center; line-height: 64px;}
.alt-san{width: 20px; height: 20px; background-color: #d0daf9; position: absolute; top: -10px; right: 58px;transform:rotate(45deg);}

.min-min-txt{font-size: 32px;color: #111; line-height: 48px;}
.min-min-img{width: 690px; height: 400px;margin-top: 20px;margin-bottom: 20px;}

.commit-tit{height: 88px;flex-direction:row; justify-content:flex-start;align-items:center; border-bottom-style: solid;border-bottom-color: #eee;border-bottom-width: 2px;}
.commit-s{width: 4px;height: 36px; background-color: #2B61FF;margin-right: 26px;}
.commit-m{font-size: 32px; color: #111;}

.com-item-box{padding-top: 30px; padding-right: 30px; padding-left: 30px;flex-direction:row; justify-content:flex-start;align-items:flex-start;}
.com-item-pic{width: 64px; height: 64px; border-radius: 64px;}
.com-item-right{width: 626px; padding-left: 20px;padding-bottom: 30px;border-bottom-style: solid;border-bottom-color: #eee;border-bottom-width: 1px;}
.com-box-s{height: 44px;flex-direction:row; justify-content:space-between;align-items:center;}
.com-s-name{font-size: 28px; color: #555;}
.com-z-box{flex-direction:row; justify-content:space-between;align-items:center;}
.com-z-ico{ width: 26px;height: 26px; margin-right: 10px;}
.com-z-txt{font-size: 24px; color: #999;}

.com-b-msg{font-size: 32px; color: #111;}

.com-r-box{flex-direction:row; justify-content:flex-start;align-items:center;}
.com-r-time{font-size: 24px; color: #999; margin-right: 26px;}
.com-r-cal{font-size: 28px; color: #43558A;}

.com-mi-box{background-color: #F7F7F7; height: 44px; position: relative; border-radius: 8px; margin-top: 20px;}
.com-mi-txt{font-size: 24px; color: #2A60FE; text-align: center; line-height: 44px;}
.com-mi-san{width: 20px; height: 20px; background-color: #F7F7F7; position: absolute; top: -10px; left: 24px;transform:rotate(45deg);}

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
