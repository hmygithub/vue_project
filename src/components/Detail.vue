<template>
    <div id="detail" class="f-cb">
      <!-- 纵一韦之所如 凌万顷之茫然 -->
      <div class="m-main">
        <div class="g-wrap1">
            <!-- <dl>
                <dt>
                    <img :src="detail.coverImgUrl" alt="">
                </dt>
                <dd>
                    <div class="hd">
                        <i class="u-icon u-icon-12"></i>
                        <div class="tit">
                            <h2 class="f-brk">{{detail.name}}</h2>
                        </div>
                    </div>
                </dd>
            </dl> -->
            <div class="left">
                <img :src="detail.coverImgUrl" alt="">
            </div>
            <div class="right">
                <div class="hd">
                    <i class="u-icon u-icon-12"></i>
                    <div class="tit">
                        <h2 class="f-brk">{{detail.name}}</h2>
                    </div>
                </div>
                <div class="create">
                    <img :src="detail.creator.avatarUrl" alt="" class="avatar">
                    <a class="creator">{{detail.creator.nickname}}</a>
                    <span class="createT">2019-05-19 创建</span>
                </div>
                <div class="play">
                    <button>播放</button>
                </div>
                <div class="f-cb tags">
                    <span> 标签：</span>
                    <span v-for="item in detail.tags">
                        <a class="u-tag" href="">
                            <i>{{item}}</i>
                        </a>
                    </span>
                </div>
                <p>介绍:{{detail.description}}</p>
            </div>
        </div>
      </div>
      <div class="m-side">
          <div class="g-wrap2">
                <h3 class="u-hd3">喜欢这个歌单的人</h3>
                <ul class="m-piclist f-cb">
                    <li v-for="item in detail.subscribers"><a href=""><img :src="item.avatarUrl" alt=""></a></li>
                </ul>
          </div>
          <div class="g-wrap3">
                <h3 class="u-hd4">相关推荐</h3>
                <ul class="m-piclist2">
                    <li v-for="item in detail.subscribers">
                        <dl>
                            <dt><img :src="item.avatarUrl" alt=""></dt>
                            <dd>
                                <p>
                                    <a href="" class="theme">碧梨/猴西/戳爷/A妹/环球旅行家</a><br>
                                    <span>by<a class="nickname">胡小胖zi</a></span>
                                </p>
                            </dd>
                        </dl>
                        
                    </li>
                </ul>
          </div>
      </div>
    </div>
</template> 

<script>
    import { 
  Button, 
  Table, 
  Modal,
  Form,
  Input,
  TreeSelect,
  Select,
  Divider,
  Row,
  Col
 } from 'ant-design-vue'
 import { mapState,mapActions } from 'vuex'
import axios from 'axios';
    export default {
        name: 'detail',
        data(){
            return {
               detail: []
            }
        },
        directives:{
            focus:{
                inserted: function(el){
                    el.focus()
                }
            }
        },
        components: {
            
        },
        created(){
            
        },
        mounted(){
            /**axios.get('/').then(res=>{
                console.log(res)
            })**/
            this.detail=this.$route.params.detail;
           console.log();
        },
        computed: {
            // ...mapState({
            //     listData: state=>state.tableList.listData,
            //     regionData: state=>state.tableList.regionData,
            //     categoryData: state=>state.tableList.categoryData
            // }),
            // ...mapActions([
            //     'add',
            //     'delete',
            //     'edit',
            // ])
        },
        methods:{
           
        }
    }

</script>

<style>
    h1, h2, h3, h4, h5, h6, hr, p, blockquote, pre,
dl, dt, dd, ul, ol, li, th, td, div, span, img,
fieldset, lengend, button, input, select, textarea{
        margin: 0;
        padding: 0;
    }
    #detail{
        width: 980px;
        border: 1px solid #ddd;
        margin: 0 auto;
        background-color: #fff;
        /* font-size: 0; */
        overflow: hidden;
    }
    .m-side{
        /* display: inline-block; */
        float: left;
        width: 270px;
        text-align: left;
    }
    .m-side .g-wrap2{
        padding: 20px 40px 40px 30px;
        font-size: 12px;
        vertical-align: top;
        text-align: left;
    }
    .m-main{
        /* display: inline-block; */
        float: left;
        width: 708px;
        border-right: 1px solid #ddd;
        overflow: hidden;
    }
    .g-wrap1{
        /* width: 644x; */
        /* height: 309px; */
        /* border: 1px solid #ddd; */
        padding: 42px 30px 0 35px;
    }
    .g-wrap1 .left{
        float: left;
        width: 200px;
        height: 309px;
    }
    .g-wrap1 .right{
        float: left;
        width: 417px;
        height: 309px;
        margin-left: 25px;
        font-size: 12px;
        text-align: left
    }
    .f-cb:after {
        clear: both;
        content: '.';
        display: block;
        height: 0;
        visibility: hidden;
    }
    .left img{
        width: 200px;
        height: 200px;
    }
    .right .hd{
        margin: 0 0 12px;
        line-height: 24px;
        padding-left: 25px;
    }
    .create{
        font-size: 12px;
        text-align: left
    }
    .avatar{
        width: 35px;
        height: 35px;
    }
    .creator{
        padding-left: 5px
    }
    .createT{
        padding-left: 20px;
        color: #999;
    }
    .tags {
        margin: 25px 0 5px;
        line-height: 22px;
    }
    .tags>span{
        float: left;
    }
    .u-tag{
        float: left;
        margin: 0 10px 3px 0;
        height: 22px;
        line-height: 22px;
        color: #777;
        text-decoration: none;
        font-size: 12px;
    }
    .u-tag i {
        padding: 3px 13px 3px 13px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    .play{
        margin-top: 20px;
        margin-bottom: 25px;
    }
    
    /* .g-wrap1 dt{
        width: 200px;
        height: 200px;
    }
    .g-wrap1 dt img{
        width: 200px;
        height: 200px;
        background-size: cover;
    }
    .g-wrap1 dd{
        width: 410px;
    }
    .g-wrap1 dd .hd{
        margin: 0 0 12px;
        line-height: 24px;
        padding-left: 25px;
    } */
    .u-icn {
        display: inline-block;
        overflow: hidden;
        vertical-align: middle;
        background: url('../assets/icon2.png') no-repeat 0 9999px;
    }
    .g-wrap1 dd .u-icn-13{
        width: 54px;
        height: 24px;
        background-position: 0 -243px;
    }
    .g-wrap1 dd .tit{
        margin-left: 64px;
    }
    .hd h2 {
        line-height: 24px;
        font-size: 20px;
        font-weight: normal;
    }
    .f-brk {
        word-wrap: break-word;
        word-break: break-word;
        white-space: normal;
    }

    /*  */
    .u-hd3,.u-hd4 {
        *zoom: 1;
        height: 23px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        color: #333;
    }
    .m-piclist{
        margin-left: -13px;
        padding-bottom: 25px;
    }
    .m-piclist li {
        float: left; 
        /* display: inline; */
        margin: 0 0 13px 13px;
    }
    .m-piclist li img{
        /* float: left; */
        width: 40px;
        height: 40px;
        border: 0;
        /* background-size:cover  */
    }
    .m-side .g-wrap3{
        padding: 20px 40px 40px 30px;
        font-size: 12px;
        vertical-align: top;
    }
    .m-piclist2 li{
        width: 200px;
        height: 50px;
        margin-bottom: 15px;
    }
    .m-piclist2 li img{
        width: 50px;
        height: 50px;
        border: 0;
    }
    .m-piclist2 li p{
        font-size: 12px;
    }
    .m-piclist2 li p a{
        color: #666;
    }
    .m-piclist2 li dt{
        width: 50px; 
        margin: 0;
        padding-top: 0;
        border-right:0;
    }
    .m-piclist2 li dd {
        margin-left: 60px;
        padding: 0;
        border-left: 0;
        line-height: 24px;
    }
    .m-piclist2 li dd .theme{
        display: inline-block;
        width: 140px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        color: #333;
    }
    .m-piclist2 li dd span{
        color: #999
    }
    .m-piclist2 li dd .nickname{
        padding-left: 5px;
        color: #666
    }
</style>