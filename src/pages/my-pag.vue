<template>
  <div class="commont-view">
    <w-header v-if="true" titles="文章详情"></w-header>
    <scroller class="page-box">
      <div class="main-box">
        <text class="min-title">{{DATA.bu_title}}</text>

        <div class="min-btn-box">
          <image class="min-pic" :src="DATA.bu_authorimgurl"></image>

          <div class="min-msg">
            <text class="min-msg-name">{{DATA.bu_author}}</text>
            <text class="min-msg-time">{{DATA.bu_publishdatetime | dataTimeFgo}}</text>
          </div>

          <div v-if="true" class="min-msg-btn">
            <image class="min-btm-ico" src="https://s.kcimg.cn/app/icon/oxman/gzg.png"></image>
            <text class="min-btn-name">关注</text>
          </div>

          <div v-if="false" class="min-msg-btn min-ok">
            <text class="min-btn-name-ok">已关注</text>
          </div>

        </div>


        <div class="alt-min-box">
          <text class="alt-txt">点击右上方关注按钮，立刻关注吧！～</text>
          <div class="alt-san"></div>
        </div>

        <text class="min-min-txt">{{DATA.bu_content}}</text>
        <image resize="cover" class="min-min-img" src="http://usr.im/345x345"></image>
        <text class="min-min-txt"></text>


      </div>

      <div class="commit-tit">
        <div class="commit-s"></div>
        <text class="commit-m">评论</text>
      </div>
      
      <div class="com-item-box">
        <image class="com-item-pic" src="http://usr.im/32x32"></image>
        <div class="com-item-right">
          <div class="com-box-s">
            <text class="com-s-name">某某的的</text>
            <div class="com-z-box">
              <image class="com-z-ico" :src="icos"></image>
              <text v-if="false" class="com-z-txt">23</text>
              <text v-if="true" class="com-z-txt blu">23</text>
            </div>
          </div>

          <text class="com-b-msg">某某的的某某的的某某的的某某的的某某的的某某的的某某的的某某的的某某的的某某的的某某的的某某的的某某的的某某的的某某的的某某的的</text>

          <div class="com-r-box">
            <text class="com-r-time">1分钟</text>
            <text class="com-r-cal">回复</text>
          </div>

          <div class="com-mi-box">
            <text class="com-mi-txt" @click="jump('/comment')">共5条回复……</text>
            <div class="com-mi-san"></div>
          </div>

        </div>
      </div>


    </scroller>
    <bot-nav :DATA="DATA" :SUM="cmtSum" @hides="hideForm"></bot-nav>

    <txt-frm v-if="showForm" @hides="hideForm"></txt-frm>
  </div>
</template>

<script>
  import WHeader from '../components/w-header.vue'
  import BotNav from '../components/bottom-nav.vue'
  import TxtFrm from '../components/txt.vue'

  import XHR from '../api'
  var modal = weex.requireModule('modal')
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
        page:1,               // 当前页码
        pageSize: 10,        // 每页显示记录数
        cmtSum:0,           // 评论总数
        outerCS:0,      // 一级评论记录总数
        COMDATA:[],         // 评论列表

        DATA:{},            // 文章详情


      }
    },
    created () {
      this.getNewsMsg()
      this.getNewsComList()
    },
    methods: {
      hideForm () { this.showForm = !this.showForm},
      getNewsMsg(){
        let self = this
        let json = {}
        json.id = this.$route.query.id
        XHR.getNewsMsg(json).then((res) => {
          if( res.data.status == '1'){
            self.DATA = res.data.data
          } else {
            modal.toast({
              message: res.data.msg,
              duration: 2
            })
          }
        })
        
      },
      getNewsComList(){
        let self = this
        let json = {}
        json.topicid = this.$route.query.id
        json.CurrentPage = this.page
        json.pagesize = this.pageSize
        XHR.getNewsComList(json).then((res) => {
          if( res.data.status == '1'){
            self.COMDATA.push(...res.data.comments)
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
    }
  }
</script>

<style scoped>
.commont-view{background-color: #fff;}
.page-box{height: 1148px;}
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
.alt-san{width: 20px; height: 20px; background-color: #d0daf9; position: absolute; top: -10px; right: 58px;-webkit-transform:rotate(45deg);}

.min-min-txt{font-size: 32px;color: #111; line-height: 48px;}
.min-min-img{width: 690px; height: 400px;margin-top: 20px;margin-bottom: 20px;}

.commit-tit{height: 88px;flex-direction:row; justify-content:flex-start;align-items:center; border-bottom-style: solid;border-bottom-color: #eee;border-bottom-width: 2px;}
.commit-s{width: 4px;height: 36px; background-color: #2B61FF;margin-right: 26px;}
.commit-m{font-size: 32px; color: #111;}

.com-item-box{padding-top: 30px; padding-right: 30px; padding-left: 30px;flex-direction:row; justify-content:flex-start;align-items:flex-start;}
.com-item-pic{width: 64px; height: 64px; border-radius: 64px;}
.com-item-right{width: 626px; padding-left: 20px;padding-bottom: 30px;border-bottom-style: solid;border-bottom-color: #eee;border-bottom-width: 2px;}
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
.com-mi-san{width: 20px; height: 20px; background-color: #F7F7F7; position: absolute; top: -10px; left: 24px;-webkit-transform:rotate(45deg);}

.blu{color: #2A60FE;}
</style>
