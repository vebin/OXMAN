<template>
  <div class="commont-view" v-if="RecommendAttentionShow">

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

      <div class="pop-item" v-for="(item,index) in RecommendAttentionList" @click="onchange(item.bu_id,index)">
        <div>
          <image class="pop-pic" :src="item.bu_imgsrc"></image>
        </div>
        <text class="pop-name">{{item.bu_name}}</text>
        <div :class="['pop-abs',!item.bu_isfollower?'blue':'']">
          <image class="pop-abs-pic" src="https://s.kcimg.cn/app/icon/oxman/yest.png"></image>
        </div>
      </div>
      
    </div>
    <a v-if="false" class="button" href="">
      <text class="but-txt">关注</text>
    </a>

    <div v-if="true" class="button buts" @click="followed">
      <text class="but-txt">关注</text>
    </div>

    <text class="jum-txt" @click="skip">随便看看，点击跳过 》</text>
  </div>
</template>

<script type="text/babel">
  const modal = weex.requireModule('modal');
  const storage = weex.requireModule('storage');

  import router from '../router'
  import XHR from '../api'
  export default {
    data () {
      return {
        //是否显示推荐关注列表
        RecommendAttentionShow:false,
        //推荐关注列表
        RecommendAttentionList:[],
        nbbsid:[]
      }
    },
    created(){

      //判断是不是第一次进入 ？ 显示推荐关注列表 ： 不显示
      storage.getItem('RecommendAttention', ele => {
        if(ele.result != 'success'){
          this.RecommendAttentionShow = true;
          //请求分类标签接口
          XHR.getRecommendAttention().then((res) => {
            if(res.ok && res.data.status == 1){
              this.RecommendAttentionList = res.data.data;
            }
          });
        }
      });

    },
    methods: {
      onchange (id,index) {
        this.RecommendAttentionList[index].bu_isfollower = !this.RecommendAttentionList[index].bu_isfollower;
      },
      followed(){
        let _this = this;
        this.nbbsid = [];

        this.RecommendAttentionList.forEach(function(ele,index){
          if(!ele.bu_isfollower){
            _this.nbbsid.push(ele.bu_id);
          }
        });

        XHR.postAttention({type:1,watchtype:1,nbbsid:JSON.stringify(this.nbbsid),UA:"MbjbUs1_N3z6k0ycXhzeE0OTEwMTQ0Mjhf"}).then((ele) => {
          if(ele.ok && ele.data.status == 1){
            this.RecommendAttentionShow = false;
          }
        })

        storage.setItem('RecommendAttention',true)
      },
      skip(){
        this.RecommendAttentionShow = false;

        storage.setItem('RecommendAttention',true)
      }
    }
  }
</script>
<style scoped>
  .commont-view {position:fixed;left:0;top:0;bottom:0;right:0;background-color: #fff;}
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
