<template>
  <div class="commont-view">
    <app-header show="2"></app-header>

    <div class="star-box">
      <div class="star-lef">
        <text class="lefTxt lefAct">已关注</text>
        <text class="lefTxt">卡车测评</text>
        <text class="lefTxt">养车</text>
        <text class="lefTxt">段子</text>
      </div>
      <div class="star-rit">
        <text v-if="false" class="ritBtn">您还未登录 马上登录</text>

        <text class="ritWelx">您还未订阅任何牛人，快去订阅一波</text>
        <text class="ritTit">推荐关注</text>

        <str-item></str-item>

      </div>
    </div>
    
    <div v-if="false" class="oneAlert">
      <image class="alertImg" src="https://s.kcimg.cn/app/icon/oxman/alert.png"></image>
      <div class="altClsBox">
        <image class="alertClox" src="https://s.kcimg.cn/app/icon/oxman/gzg.png"></image>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from '../components/app-header.vue'
  import StrItem from '../components/str-item.vue'

  const modal = weex.requireModule('modal')
  export default {
    components: { AppHeader, StrItem },
    data () {
      return {
        text: '',
      }
    },
    methods: {
      onchange (e) {
        modal.toast({
          message: 'oninput',
          duration: 0.8
        })
      },
      onfocus (e) {

      },
      onblur (e) {

      }
    }
  }
</script>
<style scoped>
  .commont-view {background-color: #f5f5f5;}
  .star-box{ flex:1; flex-direction: row;justify-content: flex-start;
  align-items:stretch;}
  .star-lef{ width: 150px;}
  .star-rit{ flex:1; background-color: #fff;padding-left: 30px;}

  .ritBtn{width:536px;height:80px; border-width: 2px; border-style: solid;border-color: #2B61FF; text-align: center; line-height: 80px; font-size: 32px; color: #2B61FF; border-radius: 4px; margin-top: 140px;}

  .lefTxt{height: 84px; text-align: center; line-height: 84px;font-size: 32px; color: #333; border-bottom-width: 4px; border-bottom-color:#f5f5f5; border-bottom-style: solid;}
  .lefAct{border-bottom-color:#2B61FF; background-color: #fff; color:#2B61FF;}

  .ritWelx{font-size: 28px; color: #999; text-align: center;margin-top: 60px; margin-bottom: 30px;}
  .ritTit{font-size: 36px; color: #333; text-align: center;}

  .oneAlert{width:750px; height: 1246px; position: absolute;top: 88px; left: 0; background-color: rgba(0,0,0,.6); justify-content: center;
  align-items:center;}
  .alertImg{ width: 534px; height: 612px;}
  .altClsBox{width: 60px; height:60px; border-radius: 60px; border-width: 2px; border-color: #fff;border-style: solid; margin-top: 60px;justify-content: center;align-items:center;}
  .alertClox{ width: 30px; height:30px; -webkit-transform:rotate(45deg);}
</style>
