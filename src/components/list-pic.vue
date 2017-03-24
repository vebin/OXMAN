<template>
    <div class="ymsg-box">
      <text class="text">狂野绅士依维柯全新Dai狂野绅士依维柯全新D狂</text>
      
      <div v-if="false" class="pic-wrap">
        <image resize="cover" class="pic" src="http://usr.im/110x74"></image>
        <image resize="cover" class="pic" src="http://usr.im/110x74"></image>
        <image resize="cover" class="pic" src="http://usr.im/110x74"></image>
      </div>

      <div class="tim-box">
        <text class="lable yel">法律救援</text>
        <text class="user-name">某某人无限</text>
        <text class="time">2小时前</text>
      </div> 
  </div>
  <!-- <image :src="item" class="pic-wrap-pic" v-for="item in PicWrap"></image> -->
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
.ymsg-box{
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom-width: 4px;
  border-bottom-color: #eee;
  border-bottom-style: solid;
}
.text{
  line-height: 48px;
  font-size: 32px;
  color: #333;
  padding-bottom: 20px;
}
.pic-wrap{
  flex-direction:row;
  flex-wrap:wrap;
  justify-content: space-between;
  align-items:center;
}
.pic{
  width: 220px;
  height: 148px;
  margin-bottom: 16px;
}
.tim-box{
  height: 30px;
  flex-direction:row;
  justify-content: space-between;
  align-items: flex-end;
}
.lable{font-size: 20px;color: #268BE7;border-width: 2px;border-color: #268BE7;border-style: solid;width: 96px;height: 26px;line-height: 26px; text-align: center;}
.yel{border-color: #F88B26;color: #F88B26;}
.user-name{
  flex:1;font-size: 28px;color: #999;padding-left: 10px; line-height: 30px;
}
.time{color: #999;font-size: 28px;line-height: 30px;}
</style>
