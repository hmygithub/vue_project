<template>
    <div id="footer">
       <div class="content">
           <div class="conText">
                <ul class="list">
                    <li><a href="">关于网易</a></li>
                    <li><a href="">客服服务</a></li>
                    <li><a href="">服务条款</a></li>
                    <li><a href="">隐私政策</a></li>
                    <li><a href="">版权投诉指引</a></li>
                    <li><a href="">意见反馈</a></li>
                </ul>
                <p>
                    <span>网易公司版权所有@1997-2019</span><br>
                    <span>违法和不良信息举报电话：0571-89853516</span>
                </p>
            
           </div>
           <div class="conIcon">
                <div class="iconWrap">
                    <a href=""><img src="../assets/images/1.png" alt=""><p>用户认证</p></a>
                    <a href=""><img src="../assets/images/2.png" alt="">独立音乐人</a>
                    <a href=""><img src="../assets/images/3.png" alt="">赞赏</a>
                    <a href=""><img src="../assets/images/4.png" alt="">视频奖励</a>
                </div>
           </div>
       </div>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
    name: 'Footer',
    computed: {
        ...mapGetters([
        'count',
        'recentHistory'
        ])
    },
    methods: {
        ...mapActions([
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementAsync'
        ])
    }
}
</script>
<style>
  #footer{
      width: 100%;
      height: 145px;
      border-top: 1px solid #ddd;
  }
  .content{
      width: 980px;
      margin: 0 auto;
  }
  .list{
      float: left;
      font-size: 0;
  }
  .list li{
      display: inline-block;
      border-right: 1px solid #ddd;
  }
  .list li a{
    font-size: 12px;
    color: #999;
    padding: 0 10px;
  }
  .conText{
    float: left;
    margin-top: 15px;
    font-size: 12px;
  }
  .conText p{
      color: #666;
      text-align: left;
      line-height: 24px;
  }
  .conIcon{
    float: right;
    width: 315px;
    margin-top: 15px
  }
  .iconWrap{
      margin-right: -40px;
  }
  .iconWrap a{
      float: left;
      width: 47px;
      margin-right: 40px;
      font-size: 10px;
      color: #999;
  }
</style>