<template>
  <div class="commont-view">
    <app-header show="1"></app-header>

    <div class="scroller">
      <list class="hot-scroller">
        <hot-top :DATA="hot"></hot-top>
        <cell
          v-for="(items, index) in indexDATA"
          append="tree"
          :ref="'item'+index"
          :index="index"
          keep-scroll-position="true">
          <list-centent :DATA="items"></list-centent>
        </cell>
      </list>
    </div>

    <div class="flow-btn" @click="jump('/flow')">
      <image class="flow-pic" src="https://s.kcimg.cn/app/icon/oxman/rzs.png"></image>
      <text class="flow-txt">认证</text>
    </div>

  </div>
</template>


<script>
  import AppHeader from '../components/app-header.vue'
  import ListCentent from '../components/list-centent.vue'
  import HotTop from '../components/hot-top.vue'

  import XHR from '../api'

  export default {
    components: { AppHeader, ListCentent, HotTop },
    // computed: {
    //   // 热门新闻
    //   hotTab () {return this.$store.state.hotTab}
    // },
    data () {
      return {
        userid:'',
        userName:'',

        
        hot: [],
        page:'',
        indexDATA:[]
      }
    },
    created () {
      // const me = this
      // const THAW = weex.requireModule('thaw')
      // THAW.onGetData('1',function(ret) {  
      //     me.userid = ret.userid
      //     me.userName = ret.userName
      // }

      this.getEverHot()
      this.getIndexAsy()
    },
    methods: {
      getEverHot(){
        let self = this
        XHR.getEveryDay().then((res) => {
          if( res.data.status == '1'){
            self.hot = res.data.data
          }
        })
      },
      getIndexAsy(){
        let self = this
        let json = {}
        if( this.page !== ''){
          json.time = this.page
        }
        XHR.getIndexAsy(json).then((res) => {
          if( res.data.status == '1'){
            self.page = res.data.data[res.data.data.length -1].bu_pushdatetime
            self.indexDATA.push(...res.data.data)
          }
        })

      },
    }
  }
</script>


<style scoped>
.commont-view {
    background-color: #FAFBFC;
}
.flow-btn{
  position: fixed;
  right: 36px;
  bottom: 126px;
  width: 94px;
  height: 94px;
  border-radius: 94px;
  background-color:rgba(43,97,255,.9);
  justify-content: center;
  align-items: center;
}
.flow-txt{font-size: 20px;color: #fff;}
.flow-pic{width: 34px;height: 34px;}

.blue{color: #1571E5;}
.scroller {width: 750px; height: 1246px; background-color: #FAFBFC;}
.row{padding-bottom: 20px;background-color:#FAFBFC;}

</style>
