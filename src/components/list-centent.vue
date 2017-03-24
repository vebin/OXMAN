<template>
  <div class="main-list">
      <list-share></list-share>
      <list-pic></list-pic>
  </div>
</template>

<script>
  import listShare from './list-share.vue'
  import listPic from './list-pic.vue'
  export default {
    components: {listShare,listPic},
    props: {
      lists: Object
    },
    data () {
      return {
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
