<template>
  <div class="commont-view">
    <app-header show="3"></app-header>

    <list class="con-box" 
      v-if="actTab == '2' && newTab.DATA.length > 0 ? true : false ">
       <cell
        v-for="(name, index) in newTab.DATA"
        append="tree"
        :ref="'item'+index"
        :index="index"
        keep-scroll-position="true">
        <my-new></my-new>
      </cell>
    </list>

    <list class="con-box"
      v-if="actTab == '1' && hotTab.DATA.length ? true : false">
       <cell
        v-for="(name, index) in hotTab.DATA"
        append="tree"
        :ref="'item'+index"
        :index="index"
        keep-scroll-position="true">
        <my-circle></my-circle>
      </cell>
    </list>

    <div v-if="actTab == '2' && newTab.DATA.length === 0 ? true : false" class="null-box">
      <image class="null-img" src="https://s.kcimg.cn/app/icon/oxman/null.png"></image>
      <text class="null-txt">您还没有发布任何文章</text>
    </div>

    <tabbar></tabbar>
  </div>
</template>

<script>
  import AppHeader from '../components/app-header.vue'
  import Tabbar from '../components/tabbar.vue'
  import MyNew from '../components/my-new.vue'
  import MyCircle from '../components/my-circle.vue'
  export default {
    components: { AppHeader, Tabbar, MyNew, MyCircle },
    computed: {
      // 焦点菜单
      actTab () {return this.$store.state.tabbar},
      hotTab () {return this.$store.state.hotTab},
      newTab () {return this.$store.state.newTab},
    },
    methods: {

    }
  }
</script>

<style scoped>
.con-box{
  flex:1;
}
.null-box{flex:1; justify-content:center; align-items:center;}
.null-img{width: 400px; height: 300px;}
.null-txt{font-size: 28px; color: #999; margin-top: 40px;}
</style>
