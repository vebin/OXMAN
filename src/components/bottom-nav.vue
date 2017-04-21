<template>
  <div class="btm-box">

    <div class="btm-nav" @click="jump('/home')">
      <image class="btm-ico" src="https://s.kcimg.cn/app/icon/oxman/home-ico.png"></image>
      <text class="btm-txt">首页</text>
    </div>
    <div class="btm-nav">
      <image class="btm-ico" :src="icos"></image>
      <text class="btm-txt">{{DATA.bu_like}}</text>
    </div>
    <div class="btm-nav" @click="$emit('hides')">
      <image class="btm-ico" src="https://s.kcimg.cn/app/icon/oxman/call.png"></image>
      <text class="btm-txt">{{SUM}}</text>
    </div>
    <div class="btm-nav">
      <image class="btm-ico" src="https://s.kcimg.cn/app/icon/oxman/shee.png"></image>
      <text class="btm-txt">{{DATA.bu_share}}</text>
    </div>
  </div>
</template>

<script>
  
  export default {
    props:{
      DATA: Object,
      SUM: Number
    },
    data () {
      return {
        icos: 'https://s.kcimg.cn/app/icon/oxman/t-zans.png',
        zans: [
          'https://s.kcimg.cn/app/icon/oxman/t-zans.png',
          'https://s.kcimg.cn/app/icon/oxman/t-zanok.png',
        ]
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>
.btm-box{height: 98px; background-color: #FAFBFC;flex-direction:row; justify-content:center;align-items:center;}
.btm-ico{width: 34px; height: 34px; margin-right: 20px;}
.btm-nav{flex:1; flex-direction:row;justify-content:center;align-items:center;}
.btm-txt{font-size: 28px;color: #999;}
</style>
