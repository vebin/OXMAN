import * as types from './type'

export default {

    [types.TAB_ALL] (state, messages) {
        state.tabAll = messages.nb
    },
    [types.ALL_NAV] (state, messages) {
        state.allNav = messages
    },
    [types.TAB_NEA] (state, messages) {
        state.neaNav = messages
    },


    [types.IS_CK] (state, messages) {
        console.log(messages,66666)
        state.DATA = messages
    }
}



