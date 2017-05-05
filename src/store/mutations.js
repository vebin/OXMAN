import * as types from './type'

export default {
    setAPPSTR (state, txt) {
        state.APPSTR = txt
    },
    setBlueTxt (state, txt) {
        state.blueTxt = txt
    },

    setComDATA (state, obj){
        state.comDATA = obj
    },
    setComTU(state, tit){
        state.comTitle = tit.tit
        state.comUrl = tit.url
    },

    [types.MY_NAV] (state, messages) {
        state.tabbar = messages
    },
    [types.SE_ID] (state, messages) {
        state.selectid = messages
    },

}


