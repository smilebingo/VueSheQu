<template>
  <div class="list">
    <loading v-if="!datalist.length"></loading>
    <ul>
      <li @click="req(item.id)" class="item" v-for="(item,index) in datalist" :key="index">
        <img v-lazy="item.author.avatar_url" title="看看" alt="加载失败" class="pic">
        <div class="rbox">
          <p class="title">
            <span class="tag" v-if="item.top">置顶</span> 
            <span class="tag" v-if="item.good">精华</span> 
            {{item.title}}
          </p>
          <section class="msgbox">
            <span class="visit">观看：{{item.visit_count}}</span>
            <span class="reply">点赞：{{item.reply_count}}</span>
          </section>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import loading from '@/components/LoadingPage'; 
export default {
  name: 'List',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:['datalist'],       // 父数据datalist
  mounted: function (){
    
  },
  methods:{
    // 点击跳转
    req(options){
      // console.log(options)
      // this.$router.push("detail");
      this.$router.push({ path: '/detail', query: { id: options }});
    }
  },
  components:{
    loading
  }
}
</script>
<style scoped lang="scss">
  @import '../../assets/sass/base.scss';
  ul{
    width: 100%;
    overflow: hidden;
    padding: rem(100px) 0 rem(60px);
    // margin-bottom: rem(60px);
    .item{
      display: flex;
      box-sizing: border-box;
      padding: rem(20px);  
      flex-direction: row;
      .pic{
        width: rem(100px);
        height: rem(100px);
        margin-right: rem(20px);
      }
      .rbox{
        flex: 1;
        display: flex;
        flex-flow: column;
        .title{
          width: rem(580px);
          font-size: rem(40px);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          flex: 1;
          .tag{
            font-size: rem(24px);
            color: #fff;
            background: #1C6132;
            padding: rem(6px) rem(10px);
            border-radius: rem(10px);
            // margin-top: - rem(10px);
            position: relative;
            top: rem(-5px);
          }
        }
        .msgbox{
          font-size: rem(30px);
          color: #646464;
          .visit{
            margin-right: rem(20px);
          }
        }
      }
    }
  }
  
</style>