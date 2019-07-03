import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      name: 'home',
      path: '/',
      component: ()=>import(/* homepage */ './views/home/Homepage.vue')
    },
    {
      name:"AppInfo",
      path:"/app/:appId",
      component: ()=>import(/* homepage */ './views/appInfo/AppInfo.vue')
    }
  ]
})
