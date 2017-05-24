<template>
  <div class="one-alert">
    <div class="one-box">
      <textarea class="textarea" placeholder="" autofocus="true" :value="txt" @input="checkForm"></textarea>
    </div>
    <div class="mo-box">
      <text class="mo-le-btn" @click="$emit('hides')">取消</text>
      <text class="mo-ri-btn" @click="saveForm">发表</text>
    </div>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
    data(){
      return {
        isok: true,
        txt:''
      }
    },
    methods: {
      checkForm(event){
        // if(curVal.length > '20'){
        //   this.isok = false
        //   modal.toast({
        //     message: '文字长度超出...',
        //     duration: 2
        //   })
        // } else {
        //   this.isok = true
        // }
        this.txt = event.value
      },
      saveForm(){
        if (this.isok && this.txt != '') {
          this.$emit('save',this.txt)
          // this.$emit('hides')
        } else {
          modal.toast({
            message: '内容不能为空',
            duration: 2
          })
        }
      }
    }
  }
</script>

<style scoped>
.one-alert{width:750px; height: inherit; position: fixed;top: 86px; left: 0; background-color: rgba(0,0,0,.6);
  align-items:flex-start;}
.one-box{padding-left: 30px;padding-right: 30px;padding-top: 30px; padding-bottom: 30px; border-bottom-color: #eee;border-bottom-width: 2px;border-bottom-style: solid; height: 228px; background-color: #fff;width:750px;}
.textarea{flex:1;}
.mo-box{height: 88px;background-color: #fff;flex-direction: row;justify-content: flex-end; align-items:center;width:750px;}
.mo-le-btn{width: 140px; height: 72px;font-size: 24px; color: #999;margin-right: 30px;line-height: 72px; text-align: center;}
.mo-ri-btn{width: 140px; height: 72px; color: #fff; font-size: 32px; line-height: 72px; text-align: center;background-color: #2B61FF;border-radius: 8px;margin-right: 30px;}
</style>
