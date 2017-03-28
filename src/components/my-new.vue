<template>
  <div class="new-box">
    <text class="new-tit">文章标题测试</text>
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

      <text class="new-st">已发布</text>
    </div>
  </div>
</template>

<script>
  
  export default {
    props: {
      items: Object
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
.new-img{ width: 34px; height: 24px; background-color: #eee;}
.new-txt{font-size: 20px; color: #999;}
.new-st{font-size:24px; color: #999; width: 100px;}
.new-left{flex:1;flex-direction:row;justify-content:flex-start;}
</style>
