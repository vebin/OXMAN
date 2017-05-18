<template>
  <div class="commont-view">
    <msg-header :titles="getTitles"></msg-header>

    <div class="scroller" v-if="DATA.length > 0 ? true : false">
      <list class="hot-scroller" @loadmore="loadList" loadmoreoffset="30">
        <cell
          v-for="(items, index) in DATA"
          append="tree"
          :ref="'item'+index"
          :index="index"
          keep-scroll-position="true">
          <list-centent :DATA="items" :types="items.bu_authortype ? 1 : 0"></list-centent>
        </cell>
        <cell>
          <text class="indicator" v-if="showLoading">Loading ...</text>
          <text class="indicator" v-if="noLoading">～我是有底线滴～</text>
        </cell>
      </list>
    </div>

    <div v-if="noLoading && DATA.length === 0 ? true : false" class="null-box">
      <image class="null-img" src="https://s.kcimg.cn/app/icon/oxman/null.png"></image>
      <text class="null-txt">{{getTitles}}为空</text>
    </div>
  </div>
</template>


<script>
  import MsgHeader from '../components/msg-header.vue'
  import ListCentent from '../components/list-centent.vue'
  const modal = weex.requireModule('modal')
  import XHR from '../api'
  export default {
    components: { MsgHeader, ListCentent },
    computed: {
      // 获取头部信息
      getTitles(){ return this.$store.state.blueTxt}
    },
    data (){
      return {
        showLoading: false,
        noLoading: false,
        page: 1,

        DATA: []
      }
    },
    created () {
      this.loadList()
    },
    methods: {
      loadList(){

        let json = {}
        json.nbuid = this.$route.query.id
        json.currentPage = this.page
        if(!this.noLoading && !this.showLoading){
          this.showLoading = true
          this.isMC(json)
        }
      },
      isMC (json){
        let self = this
        let ACT
        if(this.$route.query.tp == '1'){
          ACT = 'getNbAsync'
        } else {
          ACT = 'getNbCircle'
        }
        XHR[ACT](json).then((res) => {
          if( res.status == '1'){
            self.showLoading = false
            if(res.data.length == 0){
              self.noLoading = true
            }
            if(res.data.length < 10 && res.data.length !== 0){
              self.DATA.push(...res.data)
              self.noLoading = true
            } else {
              self.page++
              self.DATA.push(...res.data)
            }
          } else {
            self.showLoading = false
            modal.toast({
              message: res.msg,
              duration: 2
            })
          }
        })
      }
    }
  }
</script>


<style scoped>
.commont-view {
    background-color: #FAFBFC;
}
.scroller {width: 750px;flex:1; height: inherit; background-color: #FAFBFC;}
.indicator {
    height: 94px;
    color: #999;
    font-size: 32px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }

  .null-box{flex:1; justify-content:center; align-items:center;}
.null-img{width: 400px; height: 300px;}
.null-txt{font-size: 28px; color: #999; margin-top: 40px;}
</style>
