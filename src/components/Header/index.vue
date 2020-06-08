<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <!-- <router-link to="login">登录 |</router-link> -->
            <router-link :to="{path:'/login'}">登录 |</router-link>
            <router-link to="register"> 免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <!-- <a class="logo" title="尚品汇" href="###" target="_blank"> -->
          <router-link to="/">
            <img src="./images/logo.png" alt="">
          </router-link>
        <!-- </a> -->
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword"/>
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="search">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        keyword: ''
      }
    },
    methods: {
      search(){
        const {keyword} = this
        //编程式跳转
        //this.$router.push(`/search/${keyword}?keyword2=${deyword.toUpperCase()}`)
        //push({})对象语法：在开发中用的比较多
        const location = {
          name: 'search'
        }
        //只有keyword有值，才去指定params
        if (keyword) {
          location.params = {keyword}
        }
        //如果当前路由已经有categoryName/category1Id/category2Id/category3Id,携带上
        //有什么带什么：如果有自然带上了，如果没有就不携带了
        location.query = this.$route.query
        // this.$router.push(location) //重复跳转抛出错误
        // this.$router.push(location,() => {
        //   console.log('成功跳转的回调')
        // }) //使用的式vue-router3.1.0的语法（内部不会抛出错误）

        //使用的是vue-router新的语法，返回的是promise
        // this.$router.push(location).catch(() => {
        //   //console.log('出错了')
        // })
        // this.$router.push({
        //   name: 'search',
        //   params:{keyword: keyword},
        //   query: {keyword2: keyword.toUpperCase()}
        // })
        this.$router.push(location)
      }
    }
  }
</script>

<style lang="less" scoped>
  .header {
    &>.top {
      background-color: #eaeaea;
      height: 30px;
      line-height: 30px;

      .container {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;

        .loginList {
          float: left;

          p {
            float: left;
            margin-right: 10px;

            .register {
              border-left: 1px solid #b3aeae;
              padding: 0 5px;
              margin-left: 5px;
            }
          }
        }

        .typeList {
          float: right;

          a {
            padding: 0 10px;

            &+a {
              border-left: 1px solid #b3aeae;
            }
          }

        }

      }
    }

    &>.bottom {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .logoArea {
        float: left;

        .logo {
          img {
            width: 175px;
            margin: 25px 45px;
          }
        }
      }

      .searchArea {
        float: right;
        margin-top: 35px;

        .searchForm {
          overflow: hidden;

          input {
            box-sizing: border-box;
            width: 490px;
            height: 32px;
            padding: 0px 4px;
            border: 2px solid #ea4a36;
            float: left;

            &:focus {
              outline: none;
            }
          }

          button {
            height: 32px;
            width: 68px;
            background-color: #ea4a36;
            border: none;
            color: #fff;
            float: left;
            cursor: pointer;

            &:focus {
              outline: none;
            }
          }
        }
      }
    }
  }
</style>