// import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import Flow from './pages/flow.vue'
import Proc from './pages/proc.vue'
import Star from './pages/star.vue'

Vue.use(Router)



export default new Router({
  routes: [
    { path: '/home',name: 'Home', component: Home },
    { path: '/flow',name: 'Flow', component: Flow },
    { path: '/proc',name: 'Proc', component: Proc },
    { path: '/star',name: 'Star', component: Star },
    { path: '/', redirect: '/home' }
  ]
})
