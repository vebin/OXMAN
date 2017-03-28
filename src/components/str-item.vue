<template>
<div class="ritItem">
  <image class="ritPic" src="http://usr.im/40x40"></image>
  <div class="ritCenBox">
    <text class="ritCenName">卡车司机</text>
    <text class="ritCenNmb">123人关注</text>
  </div>

  <div v-if="false" class="ritStrBtn">
    <image class="ritSico" src="https://s.kcimg.cn/app/icon/oxman/gzg.png"></image>
    <text class="ritButTxt">关注</text>
    <text class="ritButTxt">已关注</text>
  </div>

  <div v-if="true" class="ritStrBtn isok">
    <text class="ritButTxt isokTxt">已关注</text>
  </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
  .ritItem{flex-direction: row;justify-content: space-between;align-items:center;border-bottom-style: solid;border-bottom-width: 2px; border-bottom-color:#e5e5e5; height: 140px;}
  .ritPic{width: 80px;height: 80px; border-radius: 80px;}
  .ritStrBtn{height: 52px;width: 128px;margin-right: 30px; background-color: #2B61FF; color: #fff; flex-direction:row;justify-content: center;align-items:center; border-radius: 10px;border-width: 2px; border-color:#2B61FF; border-style: solid; }
  .ritSico{width: 24px; height: 24px; margin-right: 10px;}
  .ritButTxt{font-size: 28px; color: #fff;}

  .ritCenBox{flex:1; padding-left: 20px;}

  .ritCenName{font-size: 28px; color: #333;}
  .ritCenNmb{font-size: 24px; color: #999;}
  .isok{ border-color: #e5e5e5; background-color: #fff;}
  .isokTxt{ color: #555;}
</style>

