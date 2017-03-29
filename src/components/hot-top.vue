<template>
  <div class="hot-box">
    <text class="day">每日推荐</text>

    <div class="top-list">
      <div class="top-cell" v-for="(item, index) in lists">
        <image class="image" src="http://usr.im/40x40"></image>
        <text class="text">{{item}}</text>
      </div>
    </div>

    <div class="msg-box">
      <text class="msg-ico">通知</text> 
      <text class="msg" @click="jump('/pages')">这个是通知的内容</text>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      lists: Array
    },
    methods: {
    }
  }
</script>

<style scoped>
.hot-box{border-bottom: 20px; border-color: #F7F9FA; border-bottom-style: solid;}
.day{color: #333;font-size: 36px; padding-top: 30px; padding-left: 30px;}
.msg-box{height: 66px;border-top: 2px;border-bottom: 2px; border-color: #e5e5e5;
  flex-direction:row;
  justify-content: flex-start;
  align-items: center;
  border-top-style: solid;
  border-bottom-style: solid;
}
.msg-ico{font-size: 28px;color: #F74948; width: 128px; border-right: 2px; border-color: #e5e5e5; text-align: center;border-right-style: solid;}
.msg{flex:1; font-size: 24px; color: #666; padding-left: 20px;}

.top-list{
    height: 194px;
    flex-direction:row;
  justify-content: space-around;
  align-items: center;
}
.top-cell{
  width: 150px;
  justify-content: center;
  align-items: center;
}
.image{width: 80px;height: 80px; border-radius: 80px;}
.text{font-size: 24px;color: #666; height: 60px; line-height: 60px;
overflow:hidden;
}
</style>
