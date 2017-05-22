<template>
  <div class="btm-box">

    <div class="btm-nav" @click="jump('/home')">
      <image class="btm-ico" src="https://s.kcimg.cn/app/icon/oxman/home-ico.png"></image>
      <text class="btm-txt">首页</text>
    </div>
    <div class="btm-nav" @click="$emit('cite')">
      <image class="btm-ico" :src="DATA.bu_islike ? zans[1] : zans[0]"></image>
      <text :class="DATA.bu_islike ? ['btm-txt blu'] : ['btm-txt']">{{$route.query.tp == '1' ? DATA.bu_like : num}}</text>
    </div>
    <div class="btm-nav" @click="checkLg">
      <image class="btm-ico" src="https://s.kcimg.cn/app/icon/oxman/call.png"></image>
      <text class="btm-txt">{{SUM}}</text>
    </div>
    <div v-if="false" class="btm-nav" @click="$emit('share')">
      <image class="btm-ico" src="https://s.kcimg.cn/app/icon/oxman/shee.png"></image>
      <text class="btm-txt">{{DATA.bu_share}}</text>
    </div>
  </div>
</template>

<script>
  import XHR from '../api'
  export default {
    props:{
      DATA: Object,
      SUM: {
        type: [Number, String],
        default: 0
      }
    },
    data () {
      return {
        zans: [
          'https://s.kcimg.cn/app/icon/oxman/t-zans.png',
          'https://s.kcimg.cn/app/icon/oxman/t-zanok.png',
        ],
        num:0
      }
    },
    created () {
      let self = this
      let json = {}
      json.id = this.$route.query.id
      if(this.$route.query.tp == '0'){
        XHR.cursHget(json).then((res) => {
          if( res.status == '1'){
            self.num = res.data
          } else {
            self.alerts(res.msg)
          }
        })
      }
    },
    methods: {

      checkLg(){
        if(this.getCookie('AbcfN_ajaxuid')){
          this.$emit('hides','msg')
        }else{
          truckhomeAccountBinding.show()
        }
      }
    }
  }
</script>

<style scoped>
.btm-box{height: 98px; background-color: #FAFBFC;flex-direction:row; justify-content:center;align-items:center;}
.btm-ico{width: 34px; height: 34px; margin-right: 20px;}
.btm-nav{flex:1; flex-direction:row;justify-content:center;align-items:center;}
.btm-txt{font-size: 28px;color: #999;}
.blu{color: #2A60FE;}
</style>
