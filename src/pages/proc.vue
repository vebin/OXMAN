<template>
  <div>
    <div class="head-box">
      <text class="ffm backs" @click="back()">&#xe6d6;</text>
      <div class="head-item">
        <div class="msg">
          <text class="head-msg">关注</text><text class="head-msg">0</text>
        </div>
        <div class="msg">
          <image class="image" src="http://usr.im/55x55"></image>
          <text class="name">某某某</text>
        </div>
        <div class="msg">
          <text class="head-msg">粉丝</text><text class="head-msg">0</text>
        </div>
      </div>
      <text class="ffm backs-r"></text>
    </div>


    <list class="pro-box">
      <cell
          append="tree"
          class="row"
          keep-scroll-position="true">
          <list-centent></list-centent>
      </cell>
    </list>


    <div class="pro-fot">
      <div v-if="false" class="pro-fot-nav">
        <text class="ffm blu">&#xe6d4;</text>
        <text class="nav-txt blu">加关注</text>
      </div>
      <div v-if="false" class="pro-fot-nav">
        <text class="ffm yel">&#xe6d5;</text>
        <text class="nav-txt yel">已关注</text>
      </div>
      <div v-if="true" class="pro-fot-nav">
        <text class="nav-txt reds">互相关注</text>
      </div>
      <div class="pro-fot-nav">
        <text class="ffm">&#xe6d3;</text>
        <text class="nav-txt">发消息</text>
      </div>
    </div>
  </div>
</template>

<script>
  const dom = weex.requireModule('dom')
  import ListCentent from '../components/list-centent.vue'
  export default {
    components: { ListCentent },
    created () {
        dom.addRule('font-face', {
          'font-family': "iconfont",
          'src' : "url('http://at.alicdn.com/t/font_amfmr26e6l9jm7vi.ttf')"
        })
    },
    methods: {
      back: function () {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
.ffm{font-family: iconfont;}
.backs{color: #fff; font-size: 32px;padding-left: 30px;padding-top: 30px;}
.backs-r{color: #fff; font-size: 32px;padding-right: 30px;padding-top: 30px;}
.image{width: 110px;height: 110px;border-radius: 110px;border-width: 4px;border-color: #fff;}
.head-box{
  height: 300px;
  background-color: #2062A9;
  background-image: url(https://s.kcimg.cn/app/icon/oxman/bg.png);
  flex-direction:row;
  justify-content: space-between;
  align-items: flex-start;
}
.head-item{
  padding-top: 60px;

  flex:1;
  flex-direction:row;
  justify-content: space-around;
  align-items: flex-start;
}
.msg{justify-content: center;align-items: center;}
.head-msg{
  color: #fff;
  font-size: 28px;
  line-height: 44px;
}
.name{color: #fff;
  font-size: 32px; margin-top: 24px;}

.pro-box{height: 936px;}

.pro-fot{
  height: 98px;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  background-color: #FAFBFC;
}
.row{padding-bottom: 20px;background-color:#FAFBFC;}
.pro-fot-nav{
  flex:1;
  flex-direction:row;
  justify-content: center;
  align-items: center;
}
.nav-txt{color: #666;font-size: 34px; padding-left: 20px;}
.blu{color: #2062A9;}
.yel{color: #ff9800;}
.reds{color: #ff5722;}
</style>
