<template>
    <div id="singer">
        <div class="m-side">
            <div class="wrap1">
                <div class="recommend category">
                    <h3>推荐</h3>
                    <ul>
                        <li v-bind:class="{ selected: this.selectedName==1001 }" @click="getSinger(1001)"><b
                                class="square"></b><a>推荐歌手</a></li>
                        <li v-bind:class="{ selected: this.selectedName==5001}" @click="getSinger(5001)"><b
                                class="square"></b><a>入驻歌手</a></li>
                    </ul>
                </div>
                <div class="chinese category">
                    <h3>华语</h3>
                    <ul>
                        <li v-bind:class="{ selected: this.selectedName== 1001}" @click="getSinger(1001)"><b
                                class="square"></b><a>华语男歌手</a></li>
                        <li v-bind:class="{ selected: this.selectedName== 1002 }" @click="getSinger(1002)"><b
                                class="square"></b><a>华语女歌手</a></li>
                        <li v-bind:class="{ selected: this.selectedName== 1003}" @click="getSinger(1003)"><b
                                class="square"></b><a>华语组合/乐队</a></li>
                    </ul>
                </div>
                <div class="english category">
                    <h3>欧美</h3>
                    <ul>
                        <li v-bind:class="{ selected: this.selectedName==2001 }" @click="getSinger(2001)"><b
                                class="square"></b><a>欧美男歌手</a></li>
                        <li v-bind:class="{ selected: this.selectedName==2002 }" @click="getSinger(2002)"><b
                                class="square"></b><a>欧美女歌手</a></li>
                        <li v-bind:class="{ selected: this.selectedName==2003 }" @click="getSinger(2003)"><b
                                class="square"></b><a>欧美组合/乐队</a></li>
                    </ul>
                </div>
                <div class="japan category">
                    <h3>日本</h3>
                    <ul>
                        <li v-bind:class="{ selected: this.selectedName==6001 }" @click="getSinger(6001)"><b
                                class="square"></b><a>日本男歌手</a></li>
                        <li v-bind:class="{ selected: this.selectedName==6002 }" @click="getSinger(6002)"><b
                                class="square"></b><a>日本女歌手</a></li>
                        <li v-bind:class="{ selected: this.selectedName==6003 }" @click="getSinger(6003)"><b
                                class="square"></b><a>日本组合/乐队</a></li>
                    </ul>
                </div>
                <div class="korean category">
                    <h3>韩国</h3>
                    <ul>
                        <li v-bind:class="{ selected: this.selectedName==7001  }" @click="getSinger(7001)"><b
                                class="square"></b><a>韩国男歌手</a></li>
                        <li v-bind:class="{ selected: this.selectedName==7002 }" @click="getSinger(7002)"><b
                                class="square"></b><a>韩国女歌手</a></li>
                        <li v-bind:class="{ selected: this.selectedName==7003 }" @click="getSinger(7003)"><b
                                class="square"></b><a>韩国组合/乐队</a></li>
                    </ul>
                </div>
                <div class="korean category">
                    <h3>其他</h3>
                    <ul>
                        <li v-bind:class="{ selected: this.selectedName==4001 }" @click="getSinger(4001)"><b
                                class="square"></b><a>其他男歌手</a></li>
                        <li v-bind:class="{ selected: this.selectedName==4002 }" @click="getSinger(4002)"><b
                                class="square"></b><a>其他女歌手</a></li>
                        <li v-bind:class="{ selected: this.selectedName==4003 }" @click="getSinger(4003)"><b
                                class="square"></b><a>其他组合/乐队</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="m-section">
            <div class="wrap2">
                <div class="m-hd">
                    <h2>{{categoryName}}</h2>
                    <a href="" class="more">更多</a>
                </div>
                <div class="m-con">
                    <ul class="Itlst f-cb">
                        <li class="item z-slt ch" @click="getSortedSingers('热门')">
                            <a>热门</a>
                        </li>
                        <!-- v-bind:class="[item,selectedLetter==item ? z-slt : '']" -->
                        <li class="item" v-for="item in letters" @click="getSortedSingers(item)">
                            <a>{{item}}</a>
                        </li>
                        <li class="item ch" @click="getSortedSingers('其他')">
                            <a>其他</a>
                        </li>
                    </ul>
                    <div class="m-wrap3">
                        <ul class="artCard">
                            <li v-for="item in artists">
                                <a href=""><img :src="item.picUrl" alt=""></a>
                                <p>
                                    <a class="nm f-thide" @click="getSinger_desc(item.id)">{{item.name}}</a>
                                    <img src="../assets/images/user.png" alt="" class="user" @click="getSinger_home(item.id)">
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Singer',
        components: {

        },
        props: ['record'],
        data() {
            return {
                isSelected: true,
                letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
                artists: [],
                cat: 1001,
                category: {
                    '5001': '入驻歌手',
                    '1001': '华语男歌手',
                    '1002': '华语女歌手',
                    '1003': '华语组合/乐队',
                    '2001': '欧美男歌手',
                    '2002': '欧美女歌手',
                    '2003': '欧美组合/乐队'
                },
                selectedLetter: 'B'
            }
        },
        beforeCreate() {

        },
        created() {
            this.getSinger(1001);
            axios.get('http://localhost:3000/playlist/catlist').then(res => {
                if (res.data.code == 200) {
                    // console.log(res.data)
                }
            })
        },
        methods: {
            getSinger(cat) {
                this.cat = cat;
                this.categoryName = this.category[cat];
                this.selectedName = cat;

                axios.get('http://localhost:3000/artist/list?cat=' + cat + '&initial=b').then(res => {
                    if (res.data.code == 200) {
                        this.artists = res.data.artists;
                    }
                })
            },
            getSortedSingers(item) {
                this.selectedLetter = item;
                axios.get('http://localhost:3000/artist/list?cat=' + this.cat + '&initial=' + item).then(res => {
                    if (res.data.code == 200) {
                        this.artists = res.data.artists;
                    }
                })
            },
            getSinger_desc(id) {
                this.$router.push({ name: 'singer_desc', params: { id } });
            },
            getSinger_home(id){
                // 接口未找找到，暂时
                axios.get('http://localhost:3000/artist/desc?id=' + id).then(res => {
                    if (res.data.code == 200) {
                        this.$router.push({ name: 'singer_home', params: { id, desc: res.data } })
                    }
                })

            }
        }
    }
</script>

<style>
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    p,
    blockquote,
    pre,
    dl,
    dt,
    dd,
    ul,
    ol,
    li,
    th,
    td,
    div,
    span,
    img,
    fieldset,
    lengend,
    button,
    input,
    select,
    textarea {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: #666;
    }

    .f-thide {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
    }

    #singer {
        width: 980px;
        height: 1493px;
        margin: 0 auto;
        /* border: 1px solid #ddd; */

    }

    .m-side {
        float: left;
        /* display: inline-block; */
        width: 180px;
        height: 1493px;
        border: 1px solid #ddd;
        border-top: 0;
        border-bottom: 0;
        background-color: #f9f9f9;
        padding-top: 40px;
    }

    .m-side .wrap1 {
        padding: 0 8px;
    }

    .category {
        padding-top: 15px;
        padding-bottom: 8px;
        border-bottom: 1px solid #ddd;
    }

    .category h3 {
        padding-left: 14px;
        padding-bottom: 5px;
    }

    .category li {
        width: 158px;
        height: 28px;
    }

    .category li .squared {
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: #aaa;
    }

    .category li a {
        line-height: 28px;
        font-size: 12px;
        color: #666;
        padding-left: 17px;
    }

    .category li.selected {
        border: 1px solid #ddd;
    }

    .category li.selected .squared {
        background-color: #cd0c0d;
    }

    .category li.selected a {
        color: #cd0c0d;
    }

    .m-section {
        float: left;
        width: 799px;
        height: 1493px;
        border-right: 1px solid #ddd;
        text-align: left;
    }

    .m-section .wrap2 {
        padding: 40px;
    }

    /*  */
    .m-section .wrap2 .m-hd {
        width: 719px;
        height: 42px;
        line-height: 42px;
        border-bottom: 2px solid #cd0c0d;
    }

    .m-section .wrap2 .m-hd h2 {
        float: left;
    }

    .m-section .wrap2 .m-hd a.more {
        float: right;
        font-size: 12px;
        color: #666;
    }

    .m-section .wrap2 .m-hd:after {
        clear: both;
        content: '';
        display: block;
    }

    .m-section .wrap2 .m-con {
        padding-top: 20px;
    }

    /* 按字母排序 */
    .wrap2 .m-con .Itlst {
        height: 24px;
    }

    .wrap2 .m-con .Itlst .item {
        float: left;
        width: 21px;
        height: 24px;
        line-height: 24px;
        margin-left: 3px;
        font-size: 12px;
        text-align: center;
    }

    /* https://blog.csdn.net/u013778905/article/details/77824564 a标签的字体颜色继承问题 */
    .wrap2 .m-con .ltlst .ch {
        width: 45px;
        font-size: 12px;
    }

    .wrap2 .m-con .ltlst .z-slt,
    .wrap2 .m-con .ltlst .z-slt:hover {
        background-color: #c20c0c;
        border-radius: 2px;
    }

    .wrap2 .m-con .ltlst .z-slt a,
    .wrap2 .m-con .ltlst .z-slt:hover a {
        color: #fff;
    }

    /* 歌手图片列表 */
    .wrap2 .m-con .artCard li {
        float: left;
        width: 147px;
        height: 184px;
        padding-left: 17px;
        padding-bottom: 30px;
    }

    .wrap2 .m-con .artCard li img {
        width: 130px;
        height: 130px;
    }

    .wrap2 .m-con .m-wrap3 {
        margin-left: -17px;
    }

    .m-con .m-wrap3 p {
        margin-top: 8px;
    }

    .wrap2 .m-con .m-wrap3 p .nm {
        float: left;
        width: 127px;
        color: #333;
        /* background: url('../assets/images/user.png') no-repeat right center; */
        padding-right: 20px;
    }
    .wrap2 .m-con .m-wrap3 p .user{
        float: right;
        width: 18px;
        height: 19px;
        vertical-align: middle;
        cursor: pointer;
    }
</style>