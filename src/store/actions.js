import XHR from '../api'
import * as types from './type'

// 热门－全部－附近－状态
export const TAB_ALL = ({ commit }, nb) => {
    var res = '123'
    // XHR.isCK().then( function (res) {
         commit(types.TAB_ALL, {res, nb})
    // })
}
// 最新－视频－关注－状态
export const ALL_NAV = ({ commit }, nb) => {
    commit(types.ALL_NAV, nb)
}
// 动态－卡友－状态
export const TAB_NEA = ({ commit }, nb) => {
    commit(types.TAB_NEA, nb)
}

// 测试
export const IS_CK = ({ commit }) => {
    XHR.isCK().then( function (res) {
        commit(types.IS_CK, res)
    })
}
