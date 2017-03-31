<template>
  <div class="main-list">
      <list-share 
      v-if="DATA.bu_mainimgjson.length === 1 ? true : false"
      :DATA="DATA"
      ></list-share>
      <list-pic 
      v-if="DATA.bu_mainimgjson.length === 1 ? false : true"
      :DATA="DATA"
      ></list-pic>
  </div>
</template>

<script>
  import listShare from './list-share.vue'
  import listPic from './list-pic.vue'
  export default {
    components: {listShare,listPic},
    props: {
      DATA: {
        bu_mainimgjson:[]
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
.main-list{
  padding-left: 30px;
  padding-right: 30px;
  background-color: #fff;
}
</style>
