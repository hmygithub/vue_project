<template>
    <div id="singer_home">
        <div class="wrap1">
            <dl class="m-intro">
                <dt class="wrapCover">
                    <img src="" alt="">
                </dt>
                <dd class="m-detail">
                    <div class="name f-cb">
                        <h2>
                            <span class="tit">
                                张惠妹amei
                            </span>
                        </h2>
                        <p class="djp">
                            台湾歌手张惠妹
                        </p>
                    </div>
                    <ul class="data">
                        <li class="fst">
                            <a href="">
                                <strong>1</strong>
                                <span>动态</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <strong>10</strong>
                                <span>关注</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <strong>55586</strong>
                                <span>粉丝</span>
                            </a>
                        </li>
                    </ul>
                    <div class="inf">个人介绍: 台湾著名女歌手</div>
                    <div class="inf">
                        所在地区：中国台湾
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Singer_home',
        components: {

        },
        props: ['id'],
        data() {
            return {
                desc: {briefDesc:"",introduction:[]}
            }
        },
        mounted() {
            // console.log(this.$route.params.desc);
            // this.desc = this.$route.params.desc;
        },
        beforeRouteUpdate(to, from, next) {

        },
        methods: {

        }
    }
</script>
<!-- alt+shift+f 代码格式化整理 -->
<style>
    #singer_home {
        width: 980px;
        height: 930px;
        margin: 0 auto;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        background: #fff;
    }

    .f-cb:after {
        clear: both;
        content: '.';
        display: block;
        height: 0;
        visibility: hidden;
    }

    .wrap1 {
        padding: 40px;
        text-align: left
    }

    .m-intro dt {
        float: left;
        width: 188px;
        margin-right: 40px;
    }

    .m-intro dt img {
        display: block;
        width: 180px;
        height: 180px;
        padding: 3px;
        background: #fff;
        border: 1px solid #d5d5d5;
    }

    .m-intro dd {
        float: left;
        width: 670px;
    }

    .name {
        padding-bottom: 12px;
        margin-bottom: 10px;
        border-bottom: 1px solid #ddd;
    }

    .name h2 {
        padding-bottom: 3px;
    }

    .name tit {
        max-width: 260px;
        float: left;
        margin-top: 3px;
        font-size: 22px;
        font-weight: normal;
        line-height: 30px;
    }

    .name .djp {
        margin-top: 8px;
        line-height: 20px;
    }

    .m-proifo .data {
        height: 41px;
        margin-bottom: 15px;
    }

    .data li {
        float: left;
        padding: 0 40px 0 20px;
        border-left: 1px solid #ddd;
    }

    .data .fst {
        padding-left: 0;
        border-left: none;
    }

    .data a {
        display: inline-block;
    }

    .data strong {
        display: block;
        margin-top: -4px;
        font-size: 24px;
        font-weight: normal;
        cursor: pointer;
    }

    .data span {
        display: block;
        text-indent: 2px;
        cursor: pointer;
    }

    .inf {
        margin-bottom: 5px;
        line-height: 21px;
    }
</style>