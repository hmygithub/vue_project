import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import Recommend from '@/components/Recommend.vue'
import PlayList from '@/components/PlayList.vue'
import Detail from '@/components/Detail.vue'
import Singer from '@/components/Singer.vue'
import Singer_home from '@/components/Singer_home.vue'
import Singer_desc from '@/components/Singer_desc.vue'
import person from '@/components/Person.vue'
import help from '@/components/Help.vue'
import Map from '@/components/Map.vue'
import Vbmap from '@/components/Vbmap.vue'
//安装插件
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
    mode:'history',
    routes:[
      { path: "/", 
        redirect: to=>{
          return '/find'
        }
      }, 
      {path: '/map',name: 'map',component: Map},
      {path: '/vbmap',name: 'vbmap',component: Vbmap},
      {
        path: "/find", name: 'find',component: Recommend
      },{
        path: '/find/playList',name: 'playList',component: PlayList
      },
      {
        path: '/find/playList/:id',name: 'detail',component: Detail
      },
      { path: '/find/singer', name: 'singer', component: Singer},
      { path: '/find/singer/home/:id', name: 'singer_home', component: Singer_home},
      { path: '/find/singer/desc/:id', name: 'singer_desc', component: Singer_desc}
    ]
}) 
/**
{path: '/map',name: 'map',component: Map},
{
  path: "/table", 
  name: 'table', 
  components: {
      default: tableList,
      help: help
  }
},
{path: "/counter", name: 'counter', component: counter},
{path: "/shop", name: 'shop', component: shop},
{
  path:"/user/:list/:listNum",
  component:tem,
  children:[
      {
          path:"con",
          component:tem_cont
      }
  ]
},
{
  path:"/user/error",
  component:tem_error
},
{ path: '/users', component: Users,
  children: [
      { path: ':username', name: 'user', component: User }
  ]
},{
  path: '/person/:personId',
  name: 'person',
  componennt: person
}


const Home = { template: '<div><h2>Home</h2></div>' }
const About = { template: '<div><h2>About</h2></div>' } 

const Users = {
  template: `
    <div>
      <h2>Users</h2>
      <router-view></router-view>
    </div>
  `
}

const User = { template: '<div>{{ $route.params.username }}</div>' } 

**/



  
