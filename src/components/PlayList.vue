<template>
    <div class="m-playlist">
        <div class="m-title">
            <h3>
                <span>全部</span>
                <a href="javascript:void(0)" class="u-btn" @click="selectCat()">选择分类</a>
            </h3>
            <div class="u-btn-hot">
                <a v-bind:class="{ selected: isActive }" @click="getTopPlaylist('hot')">热门</a>
                <a v-bind:class="{ selected: !isActive }" @click="getTopPlaylist('new')">最新</a>
            </div>
        </div>
        <div class="m-bd">
            <div class="m-bd-wrap">
                <ul>
                    <li v-for="item in playlist" @click="getDetail(item.id)">
                        <div class="u-cover">
                            <img :src="item.coverImgUrl" alt="">
                            <a class="msk" title="noopener noreferrer"></a>
                        </div>
                        <p class="desc">
                            <a class="tit f-thide" title="noopener noreferrer">{{item.name}}</a>
                        </p>
                        <p>
                            <span class="fc">by</span>
                            <a :title="item.copywriter" class="nm nm-icn f-thide">{{item.copywriter}}</a>
                            <sup></sup>
                        </p>
                    </li>
                </ul>
            </div>
            <div v-bind:class="[{vis: show}, 'modal']">
                <div class="m-hd">
                    全部风格
                </div>
                <div class="m-con ">
                    <dl class="f-cb">
                        <dt><span class="u-style">语种</span></dt>
                        <dd>
                            <span v-for="item in sub0">
                                    <a href="" class="s-fc1">{{item.name}}</a>
                                    <span class="line">|</span>
                            </span>
<!--                          
                            <a href="" class="s-fc1">欧美</a>
                            <span class="line">|</span>
                            <a href="" class="s-fc1">日语</a>
                            <span class="line">|</span>
                            <a href="" class="s-fc1">韩语</a>
                            <span class="line">|</span>
                            <a href="" class="s-fc1">小语种</a>
                            <span class="line">|</span>         -->
                        </dd>
                    </dl>

                </div>
            </div>   
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import router from 'vue-router'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'PlayList',
    data: function(){
        return {
            playlist: [],
            categories: [],
            sub0: [],
            sub1: [],
            sub2: [],
            sub3: [],
            sub4: [],
            isActive: true,
            show: true,
            detail: []
        }
    },
    created(){
        axios.get('http://localhost:3000/top/playlist?limit=35&order=hot').then(res=>{
            this.playlist=res.data.playlists;
        })
    },
    computed: mapState({
        products: state => state.products.all
    }),
    methods: {
        selectCat(){
            this.show=!this.show;
            axios.get('http://localhost:3000/playlist/catlist').then(res=>{
                if(res.code==200){
                    this.categories=res.categories;
                    this.sub0=res.sub.filter(item=>{
                        return item.category==0;
                    });
                    console.log(this.sub0);
                    this.sub1=res.sub.filter(item=>{
                        return item.category==1;
                    });
                }
            })
        },
        getTopPlaylist(order){
            if(order=='new'){
                this.isActive=false;
            }else{
                this.isActive=true;
            }
            axios.get('http://localhost:3000/top/playlist?limit=35&order='+order).then(res=>{
                this.playlist=res.data.playlists;
            })
        },
        getDetail(id){
            axios.get('http://localhost:3000/playlist/detail?id='+id).then(res=>{
                if(res.status==200){
                    this.detail=res.data.playlist;
                    this.$router.push({ name: 'detail', params: { id, detail: this.detail }});
                }
            })
        }
    },
    filters:{
        subCategory: function(value){
            if(!value)return [];
            return this.sub.filter(item=>{
                return item.category==value;
            })
        }
    }
}
</script>
<style>
.m-playlist{
    width: 982px;
    margin: 0 auto;
    min-height: 800px;
    padding: 40px;
    border: 1px solid #ddd;
    background-color: #fff;
    
}
.m-title{
    height: 40px;
    border-bottom: 2px solid #cd0c0d;
    overflow: hidden;
}
.m-title h3{
    float: left;
}
.u-btn{
    padding-left: 10px;
}
.m-title .u-btn-hot{
    float: right;
}
.u-btn-hot a{
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 5px 10px;
    color: #666;
    background-color: #fbfbfb;
}
.u-btn-hot .selected{
    color: #fff;
    background-color: #cd0c0d;
}
.m-bd{
    position: relative;
}
.m-bd .m-bd-wrap{
    margin-right: -50px;
    font-size: 0;
    padding: 40px 0;
}
.m-bd .m-bd-wrap li{
    display: inline-block;
    width: 140px;
    height: 188px;
    overflow: hidden;
    margin-right: 50px;
    margin-bottom: 30px;
}
.m-bd .m-bd-wrap .u-cover{
    position: relative;
}
.u-cover img {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
}
.u-cover .msk {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: 0 0;
}
li p{
    width: 100%;
}
li .desc {
    margin: 8px 0 3px;
    font-size: 14px;
    text-align: left;
}
li .tit {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    color: #000;
    font-size: 14px;
}
.f-thide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
li .nm {
    display: inline-block;
    max-width: 85%;
    vertical-align: top;
    font-size: 12px;
    color: #999;
    padding-left: 2px;
}
li .nm-icn {
    max-width: 76%;
}
.fc{
    color: #999;
    font-size: 12px;
}
.u-style{
    color: #333;
}
.vis{
    visibility: hidden;
}
.modal{
    width: 705px;
    height: 412px;
    border: 1px solid #ddd;
    position: absolute;
    left: 10xp;
    top: 10px;
    z-index: 1000;
    background: #f5f5f5;
}
.modal .m-hd{
    height: 55px;
    line-height: 55px;
    text-align: left;
    font-size: 12px;
    border-bottom: 1px solid #ddd;
    padding-left: 10px;
}
.f-cb:after {
    clear: both;
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
}
.u-icn {
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    margin-right: 8px;
    margin-bottom: 4px;
    background: ur('../assets/icon.png') no-repeat 0 9999px;

}
.u-icn-71 {
    width: 23px;
    height: 23px;
    background-position: -20px -735px;
}
dt{
    float: left;
    display: inline;
    width: 70px;
    margin: 0 -100px 0 26px;
    padding-top: 15px;
    border-right: 1px solid #e6e6e6;
    font-weight: bold;
}
dd{
    margin-left: 96px;
    padding: 16px 15px 0 15px;
    border-left: 1px solid #e6e6e6;
    line-height: 24px;
}
.dd a {
    white-space: nowrap;
}
.s-fc1 {
    color: #333;
}
dd .line {
    margin: 0 8px 0 10px;
    color: #d8d8d8;
}
</style>