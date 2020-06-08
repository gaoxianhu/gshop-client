//使用mockjs来mock接口

import Mock from 'mockjs'
import banners from './banners.json' //引入的时json文件（json数组），得到的是对应的js数组
import floors from './floors.json'

// 模拟返回banners数据接口
Mock.mock('/mock/banners',{code:200,data:banners})

// 模拟返回floors数据接口
Mock.mock('/mock/floors',{code:200,data:floors})

// export default xxx //不需要

console.log('mockserver...')