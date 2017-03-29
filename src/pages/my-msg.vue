<template>
  <div class="commont-view">
    <w-header v-if="true" titles="评价详情"></w-header>
    <scroller class="page-box">

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

        </div>
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


        </div>
      </div>


    </scroller>
    <text class="comment">回复评论</text>

    <txt-frm v-if="false"></txt-frm>
  </div>
</template>

<script>
  import WHeader from '../components/w-header.vue'

  import TxtFrm from '../components/txt.vue'
  export default {
    components: { WHeader, TxtFrm },
    data () {
      return {
        icos: 'https://s.kcimg.cn/app/icon/oxman/t-zan.png',
        zans: [
          'https://s.kcimg.cn/app/icon/oxman/t-zan.png',
          'https://s.kcimg.cn/app/icon/oxman/t-zanok.png',
        ]
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
.commont-view{background-color: #f5f5f5;}
.page-box{height: 1148px;}


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
</style>
