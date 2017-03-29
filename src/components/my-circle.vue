<template>
  <div class="new-box">
    <text class="new-tit">风餐露宿计算机的肌肤试</text>
    <div class="new-pin">

      <div class="new-left">
        <div class="new-pic-box">
          <image class="new-img" src="https://s.kcimg.cn/app/icon/oxman/ay.png"></image>
          <text class="new-txt">123</text>
        </div>
        <div class="new-pic-box">
          <image class="new-img" src="https://s.kcimg.cn/app/icon/oxman/msg-ico.png"></image>
          <text class="new-txt">123</text>
        </div>
        <text class="new-txt">2017年03年2日</text>
      </div>

      <text v-if="false" class="new-but">已推送</text>
      <text v-if="true" class="new-but but-blue">推送</text>
    </div>
  </div>
</template>

<script>
  
  export default {
    props: {
      items: Object,
    },
    methods: {
      
    }
  }
</script>

<style scoped>
.new-box{ height: 148px; padding-left: 30px; padding-right: 30px; border-bottom-color: #eee; border-bottom-width: 2px; border-bottom-style: solid;justify-content:center;}
.new-tit{font-size: 32px; color: #333;}
.new-pin{padding-top: 10px;flex-direction:row;justify-content:space-between; align-items:center;}
.new-pic-box{flex-direction:row; align-items:center; padding-right: 20px;}
.new-img{ width: 34px; height: 24px;}
.new-txt{font-size: 20px; color: #999;}
.new-but{font-size:28px; color: #fff; width: 108px; height: 40px; border-radius: 8px;border-width: 2px;border-color: #ccc;border-style: solid;background-color: #ccc; text-align: center; align-items:center;}
.new-left{flex:1;flex-direction:row;justify-content:flex-start;}

.but-blue{border-color: #2B61FF; background-color: #fff; color: #2B61FF;}
</style>
