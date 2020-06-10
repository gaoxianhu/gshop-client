import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
import '@/mock/mockServer' //引入加载
import 'swiper/css/swiper.min.css'

Vue.component('TypeNav',TypeNav)
Vue.component('Carousel',Carousel)
Vue.component('Pagination',Pagination)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, //配置路由器 ==> 所有的组件都可以通过$router属性得到路由器对象
  store, //注册vuex的store  使所有的组件都可以通过$store来得到store对象
  beforeCreate () { //尽量早些
    //将全局事件总线对象（vm）保存到Vue原型对象上
    Vue.prototype.$bus = this
  }
}).$mount('#app')
