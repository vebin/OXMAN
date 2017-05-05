<template>
  <div class="new-box">
    <div @click="articleInfo(items.bu_articleid)">
      <text class="new-tit">{{items.bu_title}}</text>
      <div class="new-pin">

        <div class="new-left">
          <div class="new-pic-box">
            <image class="new-img" src="https://s.kcimg.cn/app/icon/oxman/ay.png"></image>
            <text class="new-txt">{{items.bu_clickcount}}</text>
          </div>
          <div class="new-pic-box">
            <image class="new-img" src="https://s.kcimg.cn/app/icon/oxman/msg-ico.png"></image>
            <text class="new-txt">{{items.bu_share}}</text>
          </div>
          <text class="new-txt">{{items.bu_publishdatetime | dataTimeFgo}}</text>
        </div>
      </div>
    </div>
    <text class="new-st" @click="issueAlert(items.bu_articleid,items.bu_ispublish)">{{items.bu_ispublish?'已发布':'未发布'}}</text>
  </div>
</template>

<script>
  import router from '../router'
  import XHR from '../api'
  const modal = weex.requireModule('modal')
  export default {
    props: {
      items: Object
    },
    methods: {
      //弹窗
      alert (text) {
        modal.toast({
          message: text,
          duration: 0.3
        })
      },
      //进入文章详情
      articleInfo(articleId){
        router.push('/pages?id=' + articleId)
      },
      //发布 || 取消发布
      issueAlert(articleId,state){
        XHR.getArticleAttention({id: articleId, pu: state ? 0 : 1}).then((ele) => {
          if (ele.ok && ele.data.status == 1) {
            this.items.bu_ispublish = !this.items.bu_ispublish;
          }else if(ele.data.status == 0){
            this.alert(ele.data.msg)
          }else{
            this.alert('发布失败')
          }
        })
      }
    }
  }
</script>

<style scoped>
.new-box{position:relative; height: 148px; padding-left: 30px; padding-right: 30px; border-bottom-color: #eee; border-bottom-width: 2px; border-bottom-style: solid;justify-content:center;}
.new-tit{font-size: 32px; color: #333;}
.new-pin{padding-top: 10px;flex-direction:row;justify-content:space-between; align-items:center;}
.new-pic-box{flex-direction:row; align-items:center; padding-right: 20px;}
.new-img{ width: 34px; height: 24px;}
.new-txt{font-size: 20px; color: #999;}
.new-st{position:absolute;bottom:33px;right:30px;font-size:24px; color: #999; width: 100px;}
.new-left{flex:1;flex-direction:row;justify-content:flex-start;}
</style>
