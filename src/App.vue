<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- https://github.com/vuejs/vue-router/tree/dev/examples  路由相关示例 -->
    <div class="g-header">
      <div style="background-color: #333">
          <div class="wrap">
              <span class="logo">
                  <a href="/#">网易云音乐</a>
                </span>
                <ul class="m-header">
                  <li class="active"><router-link to="/">发现音乐</router-link></li>
                  <li><router-link to="">我的音乐</router-link></li>
                  <li><router-link to="/">朋友</router-link></li>
                  <li><router-link to="/">商城</router-link></li>
                  <li><router-link to="/">音乐人</router-link></li>
                  <li><router-link to="/">下载客户端</router-link></li>
                  <!-- <li><router-link to="/table">table</router-link></li>
                  <li><router-link to="/counter">counter</router-link></li>
                  <li><router-link to="/shop">ShoppingCart</router-link></li>
                  <li><router-link to="/user/error">error</router-link></li>
                  <li><router-link :to="{name: 'person',params:{personId: 123}}">person</router-link> </li> -->
              </ul>
              <input type="text" placeholder="音乐/视频/电台/用户" class="u-search">
              <a href="" class="u-center">创造者中心</a>
              <a href="" class="u-login">登录</a>
          </div>
      </div>
      <div class="m-wrap">
          <ul class="m-subnav">
              <li><router-link to="/">推荐</router-link></li>
              <li><router-link to="/">排行榜</router-link></li>
              <li><router-link to="/find/playList">歌单</router-link></li>
              <li><router-link to="/">主播电台</router-link></li>
              <li><router-link to="/find/singer">歌手</router-link></li>
              <li><router-link to="/">新碟上架</router-link></li>
            </ul>
      </div>
    </div>
    <div class="g-body">
        <router-view></router-view>
    </div>
    <div class="g-footer">
      <Footer />  
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Recommend from './components/Recommend.vue'
  // import Footer from './components/TableListv2.vue'
  import Footer from './components/Footer.vue'
  import PlayList from './components/PlayList.vue'
  import ShoppingCart from './components/ShoppingCart.vue'
  import Person from '@/components/Person.vue'
  import Help from '@/components/Help.vue'

export default {
  name: 'app',
  components: {
    Recommend,
    PlayList,
    Footer,
    Person,
    Help
  },
  created: function(){
    axios.get('http://localhost:3000/dj/program?rid=336355127').then(res=>{
                // console.log(res.data)
            })
            axios.get('http://localhost:3000/top/playlist/highquality?before=1503639064232').then(res=>{
                // console.log(res.data)
            })
  }
}
</script>
<!-- 1.安装Vue 2 Snippets插件  (ctrl+/注释)

2.在settings.json中加入这个：

"files.associations": {

"*.vue": "html"

} -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* overflow: scroll; */
}

ul{
  margin:0;
  padding: 0;
  list-style: none;
  display: inline-block;
}
li{
  margin: 0;
}
.g-header{
  width: 100%;
  height: 105px;
}
.wrap{
  width: 1100px;
  margin: 0 auto;
  /* overflow: hidden; */
}
.logo{
  display: inline-block;
  padding-left: 40px;
  font-size: 20px;
  margin-right: 15px;
  line-height: 70px;
  background: url("./assets/images/wylogo.png") 0 center no-repeat;
}
.logo a{
  color: #fff;
}

.m-header{
  margin-right: 65px;
}
.m-header li{
  display: inline-block;
  padding: 0 19px;
  height: 70px;
  line-height: 70px;
  text-align: center;
}
.m-header li.active,
.m-header li:hover{
  background: #242424;
}
.m-header li a{
  color: #666;
  text-decoration: none;
}
.m-header li.active a,
.m-header li:hover a{
  color: #fff;
}
.u-search{
  display: inline-block;
  width: 160px;
  height: 35px;
  border-radius: 20px;
  border: 0;
  padding-left: 30px;
  font-size: 12px;
  margin-right: 10px;
}
.u-center{
  display: inline-block;
  width: 95px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color:#666;
  border: 1px solid #fff;
  border-radius: 12px;
  margin-right: 15px;

}
.u-login{
  display: inline-block;
  color: #666;
}
.m-wrap{
  background: #c20c0b;
}
.m-subnav{
  height: 35px;
  text-align: center;
  margin: 0 auto;
}
.m-subnav li{
  display: inline-block;
  width: 100px;
  line-height: 35px;
  text-align: center
}
.m-subnav li a{
  font-size: 12px;
  color: #fff;
}
.g-body{
  width: 100%;
  /* height: 768px; */
  background: #f5f5f5;
  border: 1px solid #ddd;
  /* margin: 20px auto 0; */
  margin: 0 auto;
  padding: 10px;
}
.g-footer{
  width: 100%;
  background: #f5f5f5;
}
</style>
