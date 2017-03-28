<template>
  <div class="commont-view">
    <msg-header titles="某某某新闻条例"></msg-header>

    <div class="scroller">
      <list class="hot-scroller">
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

  </div>
</template>


<script>
  import MsgHeader from '../components/msg-header.vue'
  import ListCentent from '../components/list-centent.vue'
  import XHR from '../api'
  export default {
    components: { MsgHeader, ListCentent },
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


</style>
