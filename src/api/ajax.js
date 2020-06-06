//axios的二次封装（axios本事就是对XHR原生ajax的封装） 面试必须说的
//1.配置通用的基础路径和超时



import axios from 'axios'
import Nprogress from 'nprogress'

//1.配置通用的基础路径和超时
const instance = axios.create({
    // baseURL:'http://182.92.128.115/api', //基础path
    baseURL:'/api', //基础path
    timeout:15000 //请求超时时间
})

//注册请求拦截器
axios.interceptors.request.use(config => { //真正发送请求前执行
    //2.1：显示请求进度条
    Nprogress.start()
    return config
})
//注册响应拦截器
axios.interceptors.response.use(
    response => {
        //2.2：隐藏进度条
        Nprogress.done()
        // return response //请求成功后的回调
        return response.data//请求成功后的回调
    },
    error => { //请求失败后的回调
        Nprogress.done()
        alert(error.message || '未知错误')
        //要么抛出error，或者返回一个失败的promise
        // throw error
        return Promise.reject(error)
    }
)


//向外暴露的必须是这个instance，不能是axios
export default instance