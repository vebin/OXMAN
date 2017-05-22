// import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
// import Flow from './pages/flow.vue'

import Proc from './pages/proc.vue'
import Star from './pages/star.vue'
import Aution from './pages/authentication.vue'
import MyRom from './pages/my-rom.vue'
import Msgs from './pages/items.vue'
import Pages from './pages/my-pag.vue'
import Comment from './pages/my-msg.vue'

Vue.use(Router)



export default new Router({
  base: '/',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home',name: 'Home', component: Home },
    { path: '/proc',name: 'Proc', component: Proc },
    { path: '/star',name: 'Star', component: Star },
    { path: '/aution',name: 'Aution', component: Aution },
    { path: '/myrom',name: 'MyRom', component: MyRom },
    { path: '/msgs',name: 'Msgs', component: Msgs },
    { path: '/pages',name: 'Pages', component: Pages },
    { path: '/comment',name: 'Comment', component: Comment }
  ]
})
    // { path: '/flow',name: 'Flow', component: Flow },
