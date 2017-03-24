<template>
<div>
  <scroller class="scroller follow-wrap" >
    <div class="follow-content">
        <image src="https://img2.kcimg.cn/help360che/3b94145c624b4a7f8566ea0a2f1355ec.jpg_180xx.jpg" class="follow-avatar"></image>
        <div class="follow-name"><text>幸福时光</text></div>
        <div><text class="follow-add follow-btn">加关注</text></div>
    </div>
    <div class="follow-content">
        <image src="https://img2.kcimg.cn/help360che/3b94145c624b4a7f8566ea0a2f1355ec.jpg_180xx.jpg" class="follow-avatar"></image>
        <div class="follow-name"><text>幸福时光</text></div>
        <div><text class="follow-success follow-btn">已关注</text></div>
    </div>
    <div class="follow-content">
        <image src="https://img2.kcimg.cn/help360che/3b94145c624b4a7f8566ea0a2f1355ec.jpg_180xx.jpg" class="follow-avatar"></image>
        <div class="follow-name"><text>幸福时光</text></div>
        <div><text class="follow-mutual follow-btn">互相关注</text></div>
    </div>
  </scroller>
</div>
</template>

<style scoped>
    .follow-wrap{
      padding-left: 30px;
      background-color: #fff;
    }
    .follow-content{
      flex-direction: row;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-right: 30px;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: #f5f5f5;
      align-items:center;
    }
    .follow-avatar{
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin-right: 20px;
    }
    .follow-name{
      flex: 1;
    }
    .follow-btn{
      width: 130px;
      height: 60px;
      border-width: 1px;
      border-style: solid;
      border-radius: 5px;
      text-align: center;
      line-height: 60px;
      font-size: 24px;
    }
    .follow-add{
      border-color: #1571E5;
      color: #1571E5;
    }
    .follow-success{
      border-color: #F8B64E;
      color: #F8B64E;
    }
    .follow-mutual{
      border-color: #F86A4E;
      color: #F86A4E;
    }
</style>
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
