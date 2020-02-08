<template>
  <div class="detail">
    <!-- <h1>这里是详情页</h1> -->
    <div class="header">
      <i class="iconfont icon-fanhui back" @click="back"></i>
    </div>
    <loading v-if="items.length == ''"></loading>
    <div class="content">
      <p class="title">
        <span class="tag" v-if="items.top">置顶</span>
        <span class="tag" v-if="items.good">精华</span>
        {{items.title}}
      </p>
      <ul class="msg">
        <li v-if="items.author.loginname">作者 {{items.author.loginname}}</li>
        <li>{{items.visit_count}} 次浏览</li>
        <li>{{items.reply_count}} 次点赞</li>
      </ul>
    </div>
    <section class="context" v-html="items.content"></section>
    <section class="replies">
      <p class="title">共 {{items.replies.length}} 回复</p>
      <ul class="listitem">
        <li class="item" :class="index == 0||index == 1||index == 2?'fast':''"
        v-for="(item,index) in items.replies" :key="index">
          <section class="tbox">
            <img v-lazy="item.author.avatar_url" alt="">
            <span class="name">{{item.author.loginname}}</span>
            <span class="up">{{item.ups.length}} 赞</span>
            <p class="msg">{{index}}楼 · {{item.create_at}}</p>
          </section>
          <section class="bbox" v-html="item.content"></section>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import loading from '@/components/LoadingPage'; 
import {getlistDetail} from '@/api/api.js';

export default {
  name: 'Detail',
  data () {
    return {
      items:'', 
    }
  },
  mounted: function(){
    // console.log(this.$route.query.id)
    let id = this.$route.query.id;
    getlistDetail(id).then((res)=>{
      this.items = res.data.data;
      console.log(this.items)
    })
  },
  computed:{
    // gettime:function(time){
    //   let arr = time.split('T');
    //   return arr[0];
    //   // let arr = this.$route.path.split('/');
    //   // return arr[1]
    // }
  },
  methods:{
    back(){
      history.back(1);
    }
  },
  components:{
    loading
  }
}
</script>
<style scoped lang="scss">
  @import '../../assets/sass/base.scss';
  .header{
    width: 100%;
    height: rem(100px);
    background: #1C6132;
    color: #fff;
    padding-left: 3%;
    box-sizing: border-box;
    position: fixed;
    top:0;
    z-index: 999;
    .back{
      font-size: rem(50px);
      line-height: rem(100px);
      display: block;
    }
  }
  .content{
    width: 94%;
    margin: rem(100px) auto 0;
    .title{
      font-size: rem(40px);
      font-weight: 600;
      display: block;
      line-height: rem(100px);
      width: 100%;
      .tag{
        display: block;
        float: left;
        border-radius: rem(10px);
        line-height: rem(50px);
        color: #fff;
        background: #1C6132;
        font-size: rem(24px);
        padding: 0 rem(8px);
        margin: rem(24px) 1%;
      }
    }
    .msg{
      font-size: rem(26px);
      color: #8B8B8B;
      display: flex;
      border-left: rem(4px) solid #8B8B8B;
      li{
        margin-left: rem(10px);
      }
    }
  }
  .context{
    width: 100%;
    padding: rem(20px) 3%;
    margin-top: rem(20px);
    box-sizing: border-box;
    overflow: hidden;
    border-top: rem(4px) solid #F6F6F6;
    >>>img{
      width: 100%;
    }
    >>>h4{
      font-size: rem(32px);
      border-bottom: 1px solid #F6F6F6;
      margin-bottom: rem(30px);
    }
    >>>h3{
      font-size: rem(40px);
      border-bottom: 1px solid #F6F6F6;
      margin-bottom: rem(30px);
    }
    >>>p,>>>ul,>>>button{
      font-size: rem(30px);
      margin-bottom: rem(30px);
    }
    >>>code{
      width: 100%;
      font-size: rem(30px);
    }
  }
  .replies{
    font-size: rem(32px);
    background: #F6F6F6;
    .title{
      padding: rem(20px) 3%;
    }
    .listitem{
      overflow: hidden;
      .item{
        background: #fff;
        width: 100%;
        padding: rem(10px) 3% rem(40px);
        box-sizing: border-box;
        border-bottom: rem(2px) solid #EDEDED;
        .tbox{
          padding: rem(20px) 0;
          img{
            width: rem(80px);
            height: rem(80px);
            float: left;
            margin-right: 2%;
          }
          .up{
            float: right;
            font-size: rem(26px);
          }
          .msg{
            font-size: rem(28px);
            color: #8B8B8B;
          }
        }
      }
      .fast{
        background: #F4FCF0;
      }
    }
  }
  // .context >>> img{
  //   width: 100% !important;
  // }
</style>