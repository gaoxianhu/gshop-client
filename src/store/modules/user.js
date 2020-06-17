//管理用户数据的vuex子模块

import {getUserTempId} from '@/utils'
import { reqRegister, reqLogin, reqLogout } from '@/api'
import {saveUserInfo, getUserInfo, removeUserInfo} from '@/utils'

export default{
    state: {
        userInfo: getUserInfo(),//登录用户的信息  如果有数据了就自动登录上了
        userTempId: getUserTempId()
    },
    mutations: {
        RECEIVE_USER_INFO(state, userInfo) {
            state.userInfo = userInfo
        },
        RESET_USER_INFO(state) {
            state.userInfo = {}
        }
    },
    actions: {
        // 注册的异步action
        async reqRegister({commit},){
            const result = await reqRegister(userInfo)
            if (result.code !== 200) {
                throw new Error(result.data || '注册失败')
            }
        },
        // 登录的异步action
        async login({commit},{mobile, password}){
            const result = await reqLogin(mobile, password)
            if (result.code === 200) {
                const userInfo = result.data
                commit('RECEIVE_USER_INFO', userInfo)
                saveUserInfo(userInfo)
            }else {
                throw new Error(result.message || '登录失败')
            }
        },
        //退出登录
        async logout ({commit}){
            const result = await reqLogout()
            if (result.code === 200) {
                commit('RESET_USER_INFO')
                removeUserInfo()
            }else {
                throw new Error(result.message || '退出登录失败')
            }
        },
    },
    getters: {}
}