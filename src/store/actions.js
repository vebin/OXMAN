import XHR from '../api'
import * as types from './type'


// 文章－圈子－状态
export const MY_NAV = ({ commit }, nb) => {
    commit(types.MY_NAV, nb)
}


// 测试
export const IS_CK = ({ commit }) => {
    XHR.isCK().then( function (res) {
        commit(types.IS_CK, res)
    })
}
