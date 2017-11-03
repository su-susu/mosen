// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;  //将 axios 改写为 Vue 的原型属性。添加这行代码才能在 Vue文件 直接在组件的 methods 中使用 $ajax 命令

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
