<template>
  <div class="commont-view">

    <div class="header">
      <div class="backs">
        <text class="blu"></text>
      </div>

      <div class="nav">
        <text class="nav">推荐关注</text>
      </div>

      <div class="sub-btn">
        <text class="blu"></text>
      </div>
    </div>

    <text class="wel-txt">选择一些您喜欢的牛人</text>
    <text class="wel-msg">我们将努力推荐您更可能感兴趣的内容</text>
    

    <div class="pop-box">

      <div class="pop-item" v-for="item in lists">
        <div>
          <image class="pop-pic" src="http://usr.im/70x70"></image>
        </div>
        <text class="pop-name">牛人{{item}}</text>
        <div class="pop-abs blue">
          <image class="pop-abs-pic" src="https://s.kcimg.cn/app/icon/oxman/yest.png"></image>
        </div>
      </div>
      
    </div>


    <a v-if="false" class="button" href="">
      <text class="but-txt">关注</text>
    </a>

    <a v-if="true" class="button buts" href="">
      <text class="but-txt">关注</text>
    </a>

    <text class="jum-txt">随便看看，点击跳过 》</text>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        lists: [1,2,3,4,5,6,7,5,3],
        select: [],
      }
    },
    methods: {
      onchange (e) {
        modal.toast({
          message: 'oninput',
          duration: 0.8
        })
      },
      onfocus (e) {

      },
      onblur (e) {

      }
    }
  }
</script>
<style scoped>
  .commont-view {background-color: #fff;}
  .header {
    height: 88px;
    background-color: #FAFBFC;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .blu{ font-size: 36px; color: #1571e5; line-height: 88px;}
  .backs {
    height: 72px;
    padding-left: 30px;
    align-items:center;
    justify-content:center;
  }
  .sub-btn{
    height: 72px;
    padding-right: 30px;
    align-items:center;
    justify-content:center;
  }
  .nav {
    height: 88px;
    line-height: 88px;
    font-size: 36px; color: #333;
  }
.pop-box{
  height: 800px;
  margin-top: 20px;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content: space-around;
  align-items:center;
}
.wel-txt{text-align: center;font-size: 36px;color: #333;margin-top: 50px;}
.wel-msg{text-align: center;font-size: 28px;color: #666;margin-top: 20px;}
.pop-item{width: 250px;height: 200px; position: relative;
  justify-content: center;
  align-items:center; margin-top: 46px;
}
.pop-pic{width: 140px;height: 140px; border-radius: 140px;}
.pop-name{font-size: 32px; color: #333; margin-top: 20px;}
.pop-abs{position: absolute; top: 0px; right: 50px; width: 34px;height: 34px;border-width: 2px;border-color: #fff;border-style: solid; background-color:#dcd9d9; justify-content: center;
  align-items:center; border-radius: 34px;}
.pop-abs-pic{
  width: 18px; height: 18px;
}
.blue{ background-color: #2c63ff;}
.button{ background-image:linear-gradient(to top,#81a2fe,#95bcff); width: 690px; height: 88px; border-radius: 100px; margin-left: 30px; }
.buts{background-image:linear-gradient(to top,#2c63ff,#5296ff);}
.but-txt{ font-size: 36px; color: #fff; height: 88px; text-align: center; line-height: 88px;}
.jum-txt{text-align: center; font-size: 28px; color: #999; margin-top: 60px;}
</style>
