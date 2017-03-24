<template>
  <div class="commont-view">
    <app-header show="1"></app-header>

    <div class="scroller">
      <list class="hot-scroller">
        <hot-top :lists="hot"></hot-top>
        <cell
          v-for="(name, index) in hotTab.DATA"
          append="tree"
          :ref="'item'+index"
          :index="index"
          keep-scroll-position="true">
          <list-centent></list-centent>
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
    computed: {
      // 热门新闻
      hotTab () {return this.$store.state.hotTab}
    },
    data () {
      return {
        hot: ['大风刮大风大风', '2', '3','4','5'],
      }
    },
    methods: {

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
