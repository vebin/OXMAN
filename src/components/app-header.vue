<template>
  <div class="header">
    <div class="logo" @click="jump('/proc')">
      <image class="image" src="https://s.kcimg.cn/app/icon/oxman/back.png"></image>
    </div>

    <div class="nav">
      <div class="link" @click="jump('/')">
        <text :class="actClass(1)">首页</text>
      </div>
      <div class="link" @click="jump('/star')">
        <text :class="actClass(2)">关注</text>
      </div>
      <div v-if="false" class="link" @click="jump('/')">
        <text :class="actClass(3)">我的</text>
      </div>
    </div>

    <div class="add-btn" @click="jump('/')">
      <image class="image" src="https://s.kcimg.cn/app/icon/oxman/shll.png"></image>
    </div>
  </div>
</template>
<script>
  const modal = weex.requireModule('modal')
  const dom = weex.requireModule('dom')
  export default {
    props: {
      show: {
        type: String,
        default: '1'
      }
    },
    methods: {
      actClass(nb){
        return this.$props.show == nb ? 'title active' : 'title'
      }
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
    justify-content: space-between;
    align-items: flex-start;
  }
  .link {
    margin-left: 30px;
    margin-right: 30px;
    height: 88px;
    justify-content: center;
    align-items: center;
  }
  .title {
    font-size: 36px;
    color: #fff;
    padding-bottom: 10px;
  }
  .active{
    border-bottom: 3px solid #fff;
  }

  
</style>
