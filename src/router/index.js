import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Me from '@/components/Me'

import All from '@/components/menulist/All'
import Good from '@/components/menulist/Good'
import Week from '@/components/menulist/Week'
import Share from '@/components/menulist/Share'
import Ask from '@/components/menulist/Ask'
import Job from '@/components/menulist/Job'

import Detail from '@/components/menulist/Detail'


Vue.use(Router)

export default new Router({
  routes: [
    // 主页
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/',
          component:All
        },
        {
          path:'good',
          component:Good
        },
        {
          path:'week',
          component:Week
        },
        {
          path:'share',
          component:Share
        },
        {
          path:'ask',
          component:Ask
        },
        {
          path:'job',
          component:Job
        },
      ]
    },
    // 列表详情页
    {
      path:'/detail',
      name:'Detail',
      component: Detail
    },
    // 我的页面
    {
      path:'/me',
      name:'Me',
      component: Me
    },
    // 路由跳转
    {
      path:'/*',
      redirect:'/index'
    }
  ]
})
