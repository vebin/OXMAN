<template>
  <div class="commont-view">
    <w-header v-if="false" titles="牛人认证"></w-header>

    <app-header show="3"></app-header>

    <div class="pop-box">

      <div class="pop-item">
        <div class="pop-pic-box">
          <image class="pop-pic" src=""></image>
          <image class="top-use-vip" src="https://s.kcimg.cn/app/icon/oxman/dh_qita.png"></image>
        </div>
        <text class="pop-name">上传头像</text>
      </div>
      
    </div>

    <div class="input-box">
      <text class="input-txt">牛人名称：</text>
      <input class="input" type="text" placeholder="2-8个字"/>
    </div>

    <div class="input-box">
      <text class="input-txt">个人简介：</text>
      <textarea class="input textarea" placeholder="5-20个字以内"></textarea>
    </div>

    <div class="input-box">
      <text class="input-txt">联系电话：</text>
      <input class="input" type="text" placeholder="请输入您的电话"/>
    </div>

    <div class="input-box post">
      <text class="input-txt">标签属性：</text>
      <text @click="selectVal" class="input">{{typeVal}}</text>
      <image class="input-picos" src="https://s.kcimg.cn/app/icon/oxman/backs.png"></image>
    </div>

    <a v-if="true" class="button mt60" href="">
      <text class="but-txt">提交</text>
    </a>

    <a v-if="false" class="button buts mt60" href="">
      <text class="but-txt">提交</text>
    </a>

    <select-ops 
      v-if="selectOk" 
      v-on:hideSlt="selectVal" 
      :types="typeVal"
      :DATA="select"></select-ops>
  </div>
</template>

<script>
  import WHeader from '../components/w-header.vue'
  import AppHeader from '../components/app-header.vue'
  import SelectOps from '../components/select.vue'
  const modal = weex.requireModule('modal')
  // const picker = weex.requireModule('picker')
  import XHR from '../api'
  export default {
    components: { WHeader, AppHeader, SelectOps },
    data () {
      return {
        selectOk: false,

        typeVal: '',
        typeNum: 0,


        select: [],

        logo:'',
        name:'',
        phone:'',
        msg:'',
        cateid:'',

      }
    },
    created () {
      this.pick()
    },
    methods: {
      onchange (e) {
        modal.toast({
          message: 'oninput',
          duration: 0.8
        })
      },
      selectVal (nb) {
        if( nb !== -1 && typeof nb == 'number') {
          this.typeVal = this.select[nb].bu_categoryname
          this.typeNum = this.select[nb].bu_categoryid
        }
        this.selectOk = !this.selectOk
      },
      pick () {
        // var items = new Array("法律援助","Volvo","BMW")
        // var self = this
        // picker.pick({
        //     'items':items,
        //     'index':self.index
        // },function (ret) {
        //     var result = ret.result
        //     if(result == 'success')
        //     {
        //         self.value = items[ret.data]
        //         self.index = ret.data
        //     }
        // })


        let self = this
        XHR.getNoteName().then((res) => {
          if( res.data.status == '1'){
            self.select = res.data.data
          }
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
  
  .mt60{margin-top: 120px;}
  
.pop-box{
  height: 314px;
  margin-top: 20px;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content: space-around;
  align-items:center;
}

.pop-item{width: 250px;height: 200px; position: relative;
  justify-content: center;
  align-items:center; margin-top: 46px;
}
.pop-pic{width: 140px;height: 140px; border-radius: 140px;}
.pop-name{font-size: 32px; color: #333; margin-top: 20px; text-decoration: underline;}

.pop-pic-box{ background-image:url(https://s.kcimg.cn/app/icon/oxman/che.png); width: 140px;height: 140px; background-repeat: no-repeat; background-size: contain; background-position:0; border-style: solid; border-width: 2px; border-color: #e5e5e5; border-radius: 140px; position: relative;}
.top-use-vip{position: absolute; right: 0;bottom: 10px; width: 28px; height: 28px;}
.blue{ background-color: #2c63ff;}
.button{ background-image:linear-gradient(to top,#e5e5e5,#eee); width: 690px; height: 88px; border-radius: 16px; margin-left: 30px; }
.buts{background-image:linear-gradient(to top,#2c63ff,#5296ff);}
.but-txt{ font-size: 36px; color: #fff; height: 88px; text-align: center; line-height: 88px;}

.input-box{flex-direction:row;align-items:flex-start;padding-left: 30px; padding-right: 30px; padding-top: 30px;}
.input-txt{width: 222px; font-size: 32px;color: #333; line-height: 80px;}
.input{flex:1; background-color: #f5f5f5;height: 80px; padding-left: 20px; border-radius: 16px; line-height: 80px; font-size: 28px;border-width: 0;}
.textarea{height: 124px;}

.post{position: relative;}
.input-picos{width: 30px; height: 30px; -webkit-transform:rotate(-90deg); position: absolute;right: 60px; top: 56px;}
</style>
