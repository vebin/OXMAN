<template>
  <div class="header">
    <div class="logo" @click="back">
      <image class="image" src="https://s.kcimg.cn/app/icon/oxman/back.png"></image>
    </div>

    <div class="nav">
      <text class="title">{{titles}}</text>
    </div>

    <div class="add-btn" @click="jump('/aution')">
      <image class="image" src="https://s.kcimg.cn/app/icon/oxman/shll.png"></image>
    </div>
  </div>
</template>
<script>
  const modal = weex.requireModule('modal')
  const dom = weex.requireModule('dom')
  export default {
    props: {
      titles: {
        type: String,
        default: '……'
      }
    },
    methods: {

    }
  }
</script>
<style scoped>
  .ffm{
    font-family: iconfont;
    font-size: 36px; color: #1571e5; line-height: 88px;
  }
  .header {
    position: relative;
    height: 88px;
    background-color: #2B61FF;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 72px;
    height: 72px;
    padding-left: 30px;
    justify-content: center;
    align-items: center;
  }
  .add-btn{
    width: 72px;
    height: 72px;
    padding-right: 30px;
    align-items:center;
    justify-content:center;
  }
  .image {
    width: 38px;
    height: 38px;
  }
  .nav {
    height: 88px;
    width: 368px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .title {
    font-size: 36px;
    color: #fff;
    padding-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
  }
  .active{
    border-bottom: 3px solid #fff;
  }

  
</style>
