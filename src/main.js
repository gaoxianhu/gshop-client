import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, //配置路由器 ==> 所有的组件都可以通过$router获取到
}).$mount('#app')
