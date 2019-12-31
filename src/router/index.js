import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/views/Login'
// import register from '@/views/register'
// import vindex from '@/components/index'
// import talents from '@/components/Talents'
// import issue from '@/components/issue'
// import resume from '@/components/resume'
// import firm from '@/components/firm'
// import arrange from '@/components/arrange'
// import si from '@/components/404'
// import search from '@/components/Search';
Vue.use(Router)

// 路由懒加载
const login = () => import("@/views/Login")
const register = () => import("@/views/register")
const vindex = () => import("@/components/index")
const talents = () => import("@/components/Talents")
const issue = () => import("@/components/issue")
const resume = () => import("@/components/resume")
const firm = () => import("@/components/firm")
const arrange = () => import("@/components/arrange")
const si = () => import("@/components/404")
const search = () => import("@/components/Search")

// 路由动画
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/index',
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/index',
      name: 'vindex',
      component: vindex,
      meta: {
        index: 1
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      mate: {
        requireAuth: true//该路由需要拦截
      }
    },
    {
      path: '/talents',
      name: 'talents',
      component: talents,
      meta: {
        index: 2,
        requireAuth: false//该路由不需要拦截
      }
    },
    {
      path: '/issue',
      name: 'issue',
      component: issue
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    },
    {
      path: '/firm',
      name: 'firm',
      component: firm
    },
    {
      path: '/arrange',
      name: 'arrange',
      component: arrange
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '*',
      name: 'si',
      component: si
    }
  ]
  // vue router 锚点滚动
  // ,
  // scrollBehavior (to, from, savedPosition) {
  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //     }
  //   }
  // }
})
