import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import upload from '@/components/upload'
import daohang from '@/components/daohang'
import slide from '@/components/slide'
import welcome from '@/components/welcome'
 

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/upload',
      component: upload
    }
    ,{
      path: '/daohang',
      component: daohang,
      // 两个注意事项 1 要放在数组里面 2 路径要在daohang下面
      children:[{
        path:'/daohang/upload',
        component: upload

      },{
        path:'/daohang/welcome/:username',
        name:'welcome',
        component: welcome,
        props:true

      }]

    },{
      path: '/slide',
      component: slide
    }
  ]

})
