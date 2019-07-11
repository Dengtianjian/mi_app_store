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
      name:"appinfo",
      path:"/app/:appId",
      component: ()=>import(/* homepage */ './views/appInfo/AppInfo.vue')
    },
    {
      name:"game",
      path:"/game",
      component:()=>import(/* game */ './views/game/Game.vue')
    }
  ]
})
