//Vuex最核心的管理对象：store（仓库）

import Vue from 'vue'
import Vuex from 'vuex'
// import home from './modules/home'
// import user from './modules/user'
// import search from './modules/search'
import modules from './modules'

//声明使用插件
Vue.use(Vuex)

// const state = {}
const mutations = {}
const actions = {}
const getters = {}

//向外暴露store对象
export default new Vuex.Store({
    // state,
    mutations,
    actions,
    getters,
    modules
})