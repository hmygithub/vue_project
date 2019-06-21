<template>
    <div id="singer_desc">
        <!-- <div class="g-mn">
            <div class="g-mnc">
                    
            </div>
        </div> -->
        <div class="g-main">
                <div class="m-wrap1">
                    <div class="snamebox">
                        <h2 class="sname f-thide sname-max">张信哲</h2>
                        <h3 class="salias f-thide">阿哲;Jeff Chang</h3>
                    </div>
                    <div class="mask">
                        <img src="" alt="">
                        <a href="javascript:void(0)" class="btnrz"></a>
                        <a href="javascript:void(0)" class="btnfav"></a>
                    </div>
                    <ul class="m-tabs">
                        <li class="active" @click="handleChange(1)"><a href="javascript:void(0)"
                                :class="{'z-slt': flag==1}"><em>热门作品</em></a></li>
                        <li @click="handleChange(2)"><a href="javascript:void(0)"
                                :class="{'z-slt': flag==2}"><em>所有专辑</em></a></li>
                        <li @click="handleChange(3)"><a href="javascript:void(0)"
                                :class="{'z-slt': flag==3}"><em>相关mv</em></a></li>
                        <li @click="handleChange(4)"><a href="javascript:void(0)"
                                :class="{'z-slt': flag==4}"><em>艺人介绍</em></a></li>
                        <li><a><em></em></a></li>
                    </ul>
                    <div class="m-content">
                        <div class="m-artdesc">
                            <h2>
                                <i>&nbsp;</i>
                                张信哲简介
                            </h2>
                            <p>{{desc.briefDesc}}</p>
                            <div v-for="item in desc.introduction">
                                <h2>{{item.ti}}</h2>
                                <p class="z-indent">{{item.txt}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="g-aside">
            <h3 class="u-hd">
                <span>热门歌手</span>
            </h3>
            <ul class="m-hdlist">
                <li>
                    <div class="hd">
                        <a><img src="" alt=""></a>
                    </div>
                    <p><a>陈奕迅</a></p>
                </li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'Singer_desc',
        data: function () {
            return {
                desc: {
                    briefDesc: "", introduction: []
                },
                simiSingers: [],
                flag: 1
            }
        },
        created() {
            const id = this.$route.params.id;

            // 需要登录
            axios.get('http://localhost:3000/simi/artist?id=' + id).then(res => {
                if (res.data.code == 200) {
                    // console.log(res.data)
                }
            });

            axios.get('http://localhost:3000/artist/desc?id=' + id).then(res => {
                if (res.data.code == 200) {
                    this.desc = res.data;
                }
            })
        },
        methods: {
            handleChange(flag) {
                this.flag = flag;
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
    .fb:after{
        content: '';
        display: block;
        clear: both;
        height: 0;
        visibility: hidden
    }
    .f-thide {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: normal;
    }

    #singer_desc {
        width: 980px;
        min-height: 800px;
        margin: 0 auto;
        background-color: #fff;
        border: 1px solid #ddd;
    }

    .g-aside {
        float: left;
        width: 270px;
        padding: 20px 40px 40px 30px;
        text-align: left
    }

    .u-hd {
        height: 23px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        color: #333;
    }

    .u-hd span {
        line-height: 23px;
        font-size: 12px;
    }

    .m-hdlist {
        margin-left: -25px;
    }

    .m-hdlist li {
        float: left;
        width: 75px;
        height: 92px;
        padding-left: 25px;
    }

    .m-hdlist li .hd {
        width: 50px;
        height: 50px;
    }

    .m-hdlist p {
        margin-top: 7px;
        text-align: center;
    }
/* 
    .g-mn{
        float: left;
    width: 100%;
    margin-right: -270px;
    }
    .g-mnc {
    margin-right: 271px;
} */
    .g-main {
        float: left;
        width: 708px;
        padding: 47px 30px 40px 39px;
        border-right: 1px solid #ddd;
        text-align: left;
    }

    .m-wrap1 {
        /* height: 333px; */

    }

    .m-wrap1 .snamebox {
        overflow: hidden;
    }

    .m-wrap1 .sname-max {
        max-width: 75%;
    }

    .m-wrap1 .sname {
        float: left;
        height: 34px;
        line-height: 24px;
        font-weight: normal;
        font-size: 24px;
        color: #333
    }

    .m-wrap1 .salias {
        float: left;
        max-width: 23%;
        padding-left: 10px;
        font-size: 14px;
        line-height: 32px;
        color: #999;
    }

    .m-wrap1 .mask {
        position: relative;
        width: 640px;
        height: 300px;
        border: 1px solid #ccc;
    }

    .m-wrap1 .mask .btnrz {
        display: block;
        width: 95px;
        height: 32px;
        position: absolute;
        bottom: 18px;
        right: 115px;
        background: url('../assets/images/iconall.png') no-repeat 0 -1156px;
    }

    .m-wrap1 .mask .btnfav {
        display: block;
        width: 76px;
        height: 32px;
        position: absolute;
        bottom: 18px;
        right: 18px;
        background: url('../assets/images/iconall.png') no-repeat 0 -500px;
    }

    .m-wrap1 .m-tabs {
        width: 640px;
        height: 39px;
        border: 1px solid #ccc;
        border-width: 0 1px 1px 1px;
        overflow: hidden;
    }

    .m-wrap1 .m-tabs li {
        float: left;
        height: 39px;
        font-size: 14px;
        text-align: center;
        border-right: 1px solid #ccc;
    }

    .m-tabs .z-slt {
        border-top: 2px solid #D13030;
    }

    .m-tabs .active {
        /* position: relative;
        bottom: -1px; */
        height: 40px;
    }

    .m-tabs li,
    .m-tabs a,
    .m-tabs em {
        float: left;
        height: 39px;
        font-size: 14px;
    }

    .m-tabs em {
        height: 37px;
        width: 134px;
        padding: 2px 2px 0 0;
        line-height: 37px;
        cursor: pointer;
        text-align: center;
    }

    .m-content .m-artdesc {
        width: 100%;
        margin-top: 30px;
    }

    .m-content .m-artdesc h2 {
        margin: 28px 0 8px 0;
        color: #333;
        font-size: 14px;
    }

    .m-content .m-artdesc h2 i {
        height: 14px;
        width: 3px;
        margin-right: 7px;
        background: #c10d0c;
    }

    .m-content .m-artdesc p {
        line-height: 25px;
        color: #666;
        text-indent: 2em;
    }

    .m-content .m-artdesc p.z-indent {
        text-indent: 0;
    }
</style>