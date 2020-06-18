import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
import '@/mock/mockServer' //引入加载
import 'swiper/css/swiper.min.css'
import './validate' //引入表单校验的配置模块
//引入api模块中的所有分别暴露的函数，封装到API对象中
import * as API from '@/api'
import './elements'

Vue.component('TypeNav',TypeNav)
Vue.component('Carousel',Carousel)
Vue.component('Pagination',Pagination)

Vue.config.productionTip = false

//将API对象保存到Vue的原型对象上 ==> 让所有组件对象都直接可见（不用再引入API）
Vue.prototype.$API = API

new Vue({
  render: h => h(App),
  router, //配置路由器 ==> 所有的组件都可以通过$router属性得到路由器对象
  store, //注册vuex的store  使所有的组件都可以通过$store来得到store对象
  beforeCreate () { //尽量早些
    //将全局事件总线对象（vm）保存到Vue原型对象上
    Vue.prototype.$bus = this
  }
}).$mount('#app')
