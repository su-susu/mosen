import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css'

// import axios from 'axios';

Vue.use(ElementUI)

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/Registry',
      component: resolve => require(['../components/Registry.vue'], resolve)
    },
    {
    path: '/Login',
    component: resolve => require(['../components/Login.vue'],resolve)
    },

    // 卖家相关界面的path
    {
      path: '/Seller/home',
      component: resolve => require(['../components/seller/home.vue'],resolve)
    } ,
    {
      path: '/Seller/addGoods',
      component: resolve => require(['../components/seller/addGoods.vue'],resolve)
    },
    {
      path: '/Seller/editGoods',
      component: resolve => require(['../components/seller/editGoods.vue'],resolve)
    },
    {
      path: '/Seller/orderMsg',
      component: resolve => require(['../components/seller/orderMsg.vue'],resolve)
    },
    {
      path: '/Seller/editImfo',
      component: resolve => require(['../components/seller/editImfo.vue'],resolve)
    } ,
    //买家有关界面path
    {
      path: '/customer/info',
      component: resolve => require(['../components/customer/info.vue'],resolve)
    },
    {
      path: '/customer/cart',
      component: resolve => require(['../components/customer/cart.vue'],resolve)
    },

  ]
})
