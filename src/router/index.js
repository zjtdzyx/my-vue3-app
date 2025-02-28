// 路由组件在views文件夹下
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Search from '../views/Search.vue'

const routes = [
  {
    path: '/',
    redirect:'/search'
    //重定向到search
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  }
  //路由懒加载就是不用一次性加载全部路由组件，而是导航到对应的路径时才会加载对应的路由，实现路由懒加载的方法就是使用import去导入路由组件
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router