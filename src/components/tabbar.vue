<template>
  <div class="tabbar-box">

    <div class="item">
      <image :src="tab2" class="tab-ico"></image>
      <text class="tab-txt">文章</text>
    </div>

    <div class="item">
      <image :src="tab1" class="tab-ico"></image>
      <text class="tab-txt">圈子</text>
    </div>

    <div class="item">
      <image :src="tab3" class="tab-ico"></image>
      <text class="tab-txt">个人主页</text>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        tab1:'https://s.kcimg.cn/app/icon/oxman/qzx-ico.png',
        tab2:'https://s.kcimg.cn/app/icon/oxman/wz-ico.png',
        tab3:'https://s.kcimg.cn/app/icon/oxman/sz-ico.png',
        pics: [
          [
            'https://s.kcimg.cn/app/icon/oxman/qz-ico.png',
            'https://s.kcimg.cn/app/icon/oxman/qzx-ico.png'
          ],
          [
            'https://s.kcimg.cn/app/icon/oxman/wz-ico.png',
            'https://s.kcimg.cn/app/icon/oxman/wzx-ico.png'
          ]
        ]
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
.tabbar-box{height: 96px;flex-direction:row; justify-content:space-around; align-items:center; background-color: #FAFBFC; border-top-style: solid;border-top-width: 2px;border-top-color: #ccc;}
.item{flex:1; justify-content:center; align-items:center;}
.tab-ico{ width: 40px; height: 40px;}
.tab-txt{font-size: 28px; color: #999;}
</style>
