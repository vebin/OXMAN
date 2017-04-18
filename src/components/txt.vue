<template>
  <div class="one-alert">
    <div class="one-box">
      <textarea class="textarea" placeholder="5-20个字以内"></textarea>
    </div>
    <div class="mo-box">
      <text class="mo-le-btn">取消</text>
      <text class="mo-ri-btn">发表</text>
    </div>
  </div>
</template>

<script>
  
  export default {
    methods: {
      
    }
  }
</script>

<style scoped>
.one-alert{width:750px; height: 1246px; position: absolute;top: 88px; left: 0; background-color: rgba(0,0,0,.6);
  align-items:flex-start;}
.one-box{padding-left: 30px;padding-right: 30px;padding-top: 30px; padding-bottom: 30px; border-bottom-color: #eee;border-bottom-width: 2px;border-bottom-style: solid; height: 228px; background-color: #fff;width:750px;}
.textarea{flex:1;}
.mo-box{height: 88px;background-color: #fff;flex-direction: row;justify-content: flex-end; align-items:center;width:750px;}
.mo-le-btn{width: 140px; height: 72px;font-size: 24px; color: #999;margin-right: 30px;line-height: 72px; text-align: center;}
.mo-ri-btn{width: 140px; height: 72px; color: #fff; font-size: 32px; line-height: 72px; text-align: center;background-color: #2B61FF;border-radius: 8px;margin-right: 30px;}
</style>
