<template>
  <div @androidback="back">
    <router-view style="flex:1"></router-view>
  </div>
</template>

<script>
  let globalEvent = weex.requireModule('globalEvent');
  let thaw = weex.requireModule('THAW');
  const modal = weex.requireModule('modal')
  export default {
    methods: {
      back (){
        if(this.$router && this.$route.path != "/home"){
          this.$router.back();
        }else{
          thaw.onGoBack();
        }
      },
      alert (text) {
        modal.toast({
          message: text,
          duration: 0.8
        })
      }
    },
    created(){
      // var Base64 = require('js-base64').Base64;
      //app传过来的用户ID
      // this.$getConfig().userId = 255792;
      // this.$getConfig().userId = 424047 // 它
      // this.$getConfig().UA = 'NbDbIs0_M3D6Q03cXhzeE0OTEwMTQ0Mjhf'  // 它
      //app传过来的用户UA
      // if( this.$getConfig().userId ){
      //   var timer = this.timest();
      //   var uid = Base64.encode( this.$getConfig().userId );
      //   var key = Base64.encode( timer )
      //   this.$getConfig().UA = uid +'_'+ key  +'_';
      // }
      // console.log(Base64.decode('NbDbIs0'),'NbDbIs0')

      //  储存登录字符串
      this.$store.commit('setAPPSTR',this.$getConfig().auth)



      // web分享链接
      this.$getConfig().shareUrl = "www.360che.com"
      
      // 返回键监测
      var me = this
      globalEvent.addEventListener('onRespondNativeBack',function(data){
        // me.alert(me.$store.state.APPSTR)
        me.back()
      })
      // globalEvent.addEventListener('onGoLoginCallBack',function(data){

      // })
    }
}
</script>
