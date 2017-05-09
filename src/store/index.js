// import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'

if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
  actions,
  mutations,

  state: {
    nbuid:'',
    APPSTR:'',
    blueTxt:'',  // 蓝底白字标题
    selectid: 0,

    tabbar: 2,

      //认证头
    attestation:1, // 1：认证 2：修改资料

    // 评论参数暂存
    comTitle:'',
    comUrl:'',

    comDATA:{},     //  文章评论列表



    hotTab: {
        top: 0,
        DATA:[
          {id: 20},
          {id: 21},
          {id: 22}
        ]
    },

    newTab: {
        top: 0,
        DATA:[
          
        ]
    }
    
  }
})

export default store
