// import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import mutations from './mutations'

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
  actions,
  mutations,

  state: {
    tabAll: 1,
    allNav: 1,
    neaNav: 1,

    hotTab: {
        top: 0,
        DATA:[
          {id: 9},
          {id: 10},
          {id: 11},
          {id: 12},
          {id: 13},
          {id: 14},
          {id: 15},
          {id: 16},
          {id: 17},
          {id: 18},
          {id: 19},
          {id: 20},
          {id: 21},
          {id: 22},]
    },

    newTab: {
        top: 0,
        DATA:[
          {id: 5},
          {id: 6},
          {id: 7},
          {id: 8},
          {id: 9},
          {id: 10},
          {id: 11},
          {id: 12},
          {id: 13},
          {id: 14},
          {id: 15},
          {id: 16},
          {id: 17},
          {id: 18},
          {id: 19},
          {id: 20},
          {id: 21},
          {id: 22},]
    },
    vidTab: {
        top: 0,
        DATA:[{id: 1},
          {id: 2},
          {id: 3},
          {id: 8},
          {id: 9},
          {id: 10},
          {id: 11},
          {id: 12},
          {id: 13},
          {id: 14},
          {id: 15},
          {id: 16},
          {id: 17},
          {id: 18},
          {id: 19},
          {id: 20},
          {id: 21},
          {id: 22},]
    },
    folTab: {
        top: 0,
        DATA:[{id: 1},
          {id: 2},
          {id: 3},
          {id: 4},
          {id: 5},
          {id: 6},
          {id: 7},
          {id: 8},
          {id: 9},
          {id: 10},
          {id: 17},
          {id: 18},
          {id: 19},
          {id: 20},
          {id: 21},
          {id: 22},]
    },


    actTab: {
        top: 0,
        DATA:[{id: 1},
          {id: 2},
          {id: 3},
          {id: 4},
          {id: 5},
          {id: 6},
          {id: 7},
          {id: 8},
          {id: 9},
          {id: 10},
          {id: 11},
          {id: 12},
          {id: 13},
          {id: 14},
          {id: 15},
          {id: 16},
          {id: 17},
          {id: 18},
          {id: 19},
          {id: 20},
          {id: 21},
          {id: 22},]
    },
    felTab: {
        top: 0,
        DATA:[{id: 1},
          {id: 2},
        
          {id: 20},
          {id: 21},
          {id: 22},]
    }
  }
})

export default store
