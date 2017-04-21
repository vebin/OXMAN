<template>
  <div class="commont-view">
    <app-header show="3"></app-header>

    <list class="con-box"
      v-if="actTab == '2' && ArticleList.length > 0 ? true : false ">
       <cell
        v-for="(items, index) in ArticleList"
        append="tree"
        :ref="'item'+index"
        :index="index"
        keep-scroll-position="true">
        <my-new :items="items"></my-new>
      </cell>
    </list>

    <list class="con-box"
      v-if="actTab == '1' && CircleList.length > 0 ? true : false">
       <cell
        v-for="(items, index) in CircleList"
        append="tree"
        :ref="'item'+index"
        :index="index"
        keep-scroll-position="true">
        <my-circle :items="items"></my-circle>
      </cell>
    </list>

    <div v-if="actTab == '2' && ArticleList.length === 0 ? true : false" class="null-box">
      <image class="null-img" src="https://s.kcimg.cn/app/icon/oxman/null.png"></image>
      <text class="null-txt">您还没有发布任何文章</text>
    </div>

    <div v-if="actTab == '1' && CircleList.length === 0 ? true : false" class="null-box">
      <image class="null-img" src="https://s.kcimg.cn/app/icon/oxman/null.png"></image>
      <text class="null-txt">圈子为空</text>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script type="text/babel">
  import AppHeader from '../components/app-header.vue'
  import Tabbar from '../components/tabbar.vue'
  import MyNew from '../components/my-new.vue'
  import MyCircle from '../components/my-circle.vue'
  import XHR from '../api'
  export default {
    data(){
      return {
        //圈子id
        circleId:'',
        //圈子列表
        CircleList:[],
        //文章列表
        ArticleList:[],

      }
    },
    components: { AppHeader, Tabbar, MyNew, MyCircle },
    computed: {
      // 焦点菜单
      actTab () {return this.$store.state.tabbar}
    },
    created(){

      //获取个人信息
      XHR.getBbsUserInfo({uid:this.$getConfig().userId}).then((ele) => {
        if(ele.ok){
          console.log(ele);
          //如果创建过圈子
          if(ele.data.data.subForum){
              this.circleId = ele.data.data.subForum.id;
              //获取圈子列表
              this.getBbsNbCircleList();
          }
        }
      });

      //请求文章列表
      XHR.getNbArticleList({UA:this.$getConfig().UA,page:1,pagesize:20,}).then((ele) => {
        if(ele.ok && ele.data.status == 1){
          this.ArticleList = ele.data.data;
        }
      })
    },
    methods: {
      //获取圈子列表
      getBbsNbCircleList(){
        XHR.getBbsNbCircleList({sub_fid:circleId}).then((ele) => {
          if(ele.ok && ele.data.status == 1){
            this.CircleList = ele.data.data;
          }
        })
      }
    }
  }
</script>

<style scoped>
.con-box{
  flex:1;
  padding-bottom:98px;
  height: 1246px;
}
.null-box{flex:1; justify-content:center; align-items:center;}
.null-img{width: 400px; height: 300px;}
.null-txt{font-size: 28px; color: #999; margin-top: 40px;}
</style>
