<template>
  <div @androidback="back">
    <router-view style="flex:1"></router-view>
  </div>
</template>

<script>

  export default {
    methods: {
      back: function () {
        this.$router.back()
      }
    },
    created(){
      //app传过来的用户ID
      this.$getConfig().userId = 255792;
      // this.$getConfig().userId = 424047; // 它
      //app传过来的用户UA
      this.$getConfig().UA = 'MbjbUs1_N3z6k0ycXhzeE0OTEwMTQ0Mjhf';
    }
  }
</script>

<style scoped>

</style>
