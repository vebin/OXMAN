<template>
  <div class="commont-view">
    <app-header show="3"></app-header>
    <list class="con-box">

     <!--  <cell
        v-for="(name, index) in hotTab.DATA"
        append="tree"
        :ref="'item'+index"
        :index="index"
        keep-scroll-position="true">
        <list-centent></list-centent>
      </cell>-->
    </list> 

    <tabbar></tabbar>
  </div>
</template>

<script>
  import AppHeader from '../components/app-header.vue'
  import Tabbar from '../components/tabbar.vue'
  export default {
    components: { AppHeader, Tabbar },
    methods: {

    }
  }
</script>

<style scoped>
.con-box{
  flex:1;
}
</style>
