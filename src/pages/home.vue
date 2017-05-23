<template>
  <div class="commont-view">
    <app-header show="1"></app-header>

    <div class="scroller">
      <list class="hot-scroller" @loadmore="getIndexAsy" loadmoreoffset="50">
        <cell>
          <hot-top :DATA="hot"></hot-top>
        </cell>
        <cell
          v-for="(items, index) in indexDATA"
          append="tree"
          :ref="'item'+index"
          :index="index"
          keep-scroll-position="true">
          <list-centent :DATA="items" :types="items.bu_authortype ? 1 : 0"></list-centent>
        </cell>
        <cell>
          <text class="indicator" v-if="showLoading">Loading ...</text>
          <text class="indicator" v-if="noLoading">～我是有底线滴～</text>
        </cell>
      </list>
    </div>

    <div v-if="attestation" class="flow-btn" @click="jump('/aution')">
      <image class="flow-pic" src="https://s.kcimg.cn/app/icon/oxman/rzs.png"></image>
      <text class="flow-txt">认证</text>
    </div>

  </div>
</template>

<script>
  import AppHeader from '../components/app-header.vue'
  import ListCentent from '../components/list-centent.vue'
  import HotTop from '../components/hot-top.vue'

  import XHR from '../api'
  const modal = weex.requireModule('modal')
  export default {
    components: { AppHeader, ListCentent, HotTop },
    data () {
      return {
        showLoading: false,
        noLoading: false,
        userid:'',
        userName:'',

        hot: [],
        page:'',
        indexDATA:[],
        //是否显示认证
        attestation:false
      }
    },
    created () {
      // let auths = `${this.getCookie('AbcfN_auth')}`
      // let userIds = `${this.getCookie('AbcfN_ajaxuid')}`
      //  储存登录字符串
      this.$store.commit('setNbuid', this.getCookie('AbcfN_ajaxuid') )

      XHR.wxConfig().then( (res) => {
        if( res.status == '1'){
          localStorage.setItem('WX_CONFIGXS',JSON.stringify(res.data))
        }
      })

      this.getManInfo()
      this.getEverHot()
      this.getIndexAsy()

    },
    mounted(){
      this.shares()
    },
    methods: {
      shares(){
        setTimeout( function(){
          wx.ready(function(){
            wx.showOptionMenu();

              wx.onMenuShareTimeline({
                title: '卡车之家牛人平台',
                link: window.location.href,
                imgUrl:'https://nb.360che.com/wx/share.png',
                success: function () { 
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () { 
                    // 用户取消分享后执行的回调函数
                }
              });

              wx.onMenuShareAppMessage({
                  title: '卡车之家牛人平台', // 分享标题
                  desc: '卡友看牛人、牛文，就在牛人平台。', // 分享描述
                  link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: 'https://nb.360che.com/wx/share.png', // 分享图标
                  type: '', // 分享类型,music、video或link，不填默认为link
                  dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                  success: function () { 
                      // 用户确认分享后执行的回调函数
                  },
                  cancel: function () { 
                      // 用户取消分享后执行的回调函数
                  }
              });
            })
          },2000)
      },
      getManInfo () {
        let self = this
        let json = {}
        json.uid = 0
        XHR.checkRZ(json).then( (res) => {
          if( res.status == '1'){
            self.attestation = res.data
          }
        })
      },
      getEverHot () {
        let self = this
        XHR.getEveryDay().then( (res) => {
          if( res.status == '1'){
            self.hot = res.data
          }
        })
      },
      getIndexAsy () {
        let self = this
        let json = {}
        if( this.page !== ''){
          json.time = this.page
        }
        if(!this.noLoading && !this.showLoading){
          self.showLoading = true
          XHR.getIndexAsy(json).then((res) => {
            if( res.status == '1'){
              self.showLoading = false
              self.page = res.data[res.data.length -1].bu_pushdatetime || ''
              if(res.data.length == 0){
                self.noLoading = true
              }
              if(res.data.length < 10 && res.data.length !== 0){
                self.indexDATA.push(...res.data)
                self.noLoading = true
              } else {
                self.indexDATA.push(...res.data)
              }
            }else{
              self.showLoading = false
              self.alerts(res.msg)
            }
          })
        }
      },

    }
  }
</script>


<style scoped>
.commont-view {
    flex-direction:column;
    background-color: #FAFBFC;
}
.flow-btn{
  position: fixed;
  right: 36px;
  bottom: 126px;
  width: 94px;
  height: 94px;
  border-radius: 94px;
  background-color:rgba(43,97,255,.9);
  justify-content: center;
  align-items: center;
}
.flow-txt{font-size: 20px;color: #fff;}
.flow-pic{width: 34px;height: 34px;}

.blue{color: #1571E5;}
.scroller {width: 750px; flex:1;  background-color: #FAFBFC; -webkit-overflow-scrolling:touch;}
.row{padding-bottom: 20px;background-color:#FAFBFC;}
.indicator {
    height: 94px;
    color: #999;
    font-size: 32px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
</style>
