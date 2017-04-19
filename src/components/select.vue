<template>
  <div class="oneAlert" @click="opect(-1)">
    <list class="alertImg">
      <cell
        v-for="(v,i) in DATA"
        append="tree"
        :index="i"
        class="row">

        <text :class="selt(types,v.bu_categoryname)" @click="opect(i,v.bu_categoryname)">{{v.bu_categoryname}}</text>

      </cell>
    </list>
  </div>
</template>

<script>
  
  export default {
    props:{
      DATA: Array,
      types: String
    },
    methods: {
      opect (nb,content) {
        this.$emit('hideSlt',nb,content)
      },
      selt(typs,ids){
        return typs == ids ? 'item-title bule' : 'item-title'
      }
    }
  }
</script>

<style scoped>
.oneAlert{width:750px; height: 1334px; position: absolute;bottom: 0; left: 0; background-color: rgba(0,0,0,.6); justify-content: flex-end;align-items:flex-end;}

.alertImg{ width: 750px; height: 400px; background-color: #fff; justify-content: center;align-items:center;}

.row{width: 750px; height:80px; border-bottom-width: 2px; border-bottom-color: #f5f5f5;border-bottom-style: solid;justify-content: center;align-items:center;}
.item-title{ font-size: 30px; color: #333; text-align: center; line-height: 80px;}
.bule{color: #2B61FF;}
</style>
