import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const render = h => h('router-view')

export const Routes = [
  {
    path: 'system',
    name: '系统的一些设置',
    redirect: '/system/role',
    meta: {
      icon: 'icon-setting'
    },
    component: { render },
    children: [
      {
        path: 'role',
        name: '权限角色',
        redirect: '/system/role/list',
        component: { render },
        children: [
          {
            path: 'list',
            component: () => import('./views/role/list.vue')
          },
          {
            path: 'deal',
            component: () => import('./views/role/deal.vue')
          },
          {
            path: 'detail',
            component: () => import('./views/role/detail.vue')
          }
        ]
      },
      {
        path: 'account',
        name: '登录帐号管理',
        redirect: '/system/account/list',
        component: { render },
        children: [
          {
            path: 'list',
            component: () => import('./views/account/list.vue')
          },
          {
            path: 'deal',
            component: () => import('./views/account/deal.vue')
          },
          {
            path: 'detail',
            component: () => import('./views/account/detail.vue')
          }
        ]
      }
    ]
  },
  {
    path: 'other',
    name: '一些其他的例子',
    redirect: '/other/movie',
    meta: {
      icon: 'icon-others'
    },
    component: { render },
    children: [
      {
        path: 'movie',
        name: '豆瓣电影',
        redirect: '/other/movie/list',
        component: { render },
        children: [
          {
            path: 'list',
            component: () => import('./views/movie/list.vue')
          }
        ]
      }
    ]
  }
]

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: '首页',
      redirect: '/system/role',
      component: Home,
      children: Routes
    },
    {
      path: '/test',
      name: '测试',
      component: () => import('./views/test.vue')
    }
  ]
})
