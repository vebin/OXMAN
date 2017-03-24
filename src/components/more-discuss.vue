<template>
<div>
  <scroller class="scroller discuss-wrap" >
    <div class="discuss-list">
        <image src="https://img2.kcimg.cn/help360che/3b94145c624b4a7f8566ea0a2f1355ec.jpg_180xx.jpg" class="discuss-avatar"></image>
        <div class="discuss-centent">
          <text class="discuss-title">今年被罚了多少钱</text>
          <text class="discuss-describe">卡友们有没有算过这一年，累计交警路被罚了多少钱啊！卡友们有没有算过这一年，累计交警路被罚了多少钱啊！</text>
        </div>
    </div>
  </scroller>
</div>
</template>

<style scoped>
.discuss-wrap{
  padding-left: 30px;
  background-color: #fff;
}
.discuss-list{
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 30px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #f5f5f5;
}
.discuss-title{
  font-size: 28px;
  color: #333333;
  line-height: 44px;
}
.discuss-describe{
  font-size: 24px;
  color: #999999;
  margin-top: 4px;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  lines: 2;
}
.discuss-centent{
  flex:1;
}
.discuss-avatar{
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 20px;
  margin-top: 4px;
}
</style>
<script>
  export default {
    data () {
      return {
        lists: [1, 2, 3]
      }
    },
    methods: {
    }
  }
</script>
