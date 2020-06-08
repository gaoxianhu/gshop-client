//管理首页数据的vuex子模块

import {reqCategoryList} from '@/api'

export default{
    state: {
        categoryList:[], //分类列表
        xxx:{},
        yyy:'atguigu'
    },
    mutations: {
        test1(state){},
        //接收保存分类列表的mutation
        RECEIVE_CATEGORY_LIST(state,categoryList){
            state.categoryList = categoryList.filter((item,index) => index<15)
        }
    },
    actions: {
        async getCategoryList({commit}){
            //调用接口请求函数发异步ajax请求
            const result = await reqCategoryList()
            //请求成功后,取出数据，提交给mutations保存
            if (result.code === 200) {
                const categoryList = result.data
                commit('RECEIVE_CATEGORY_LIST',categoryList)
            }
        }
    },
    getters: {}
}