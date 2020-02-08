<template>
  <div id="app">
    <router-view/>
    <!-- <footer v-if="resPath == 'index'|| resPath == 'me'">
      <ul class="footer">
        <router-link to="/" tag="li" class="menu" :class="resPath=='index'?'mo':''">
          <span>首页</span>  
        </router-link>
        <router-link to="/me" tag="li" class="menu" :class="resPath=='me'?'mo':''">
          <span>我的</span>  
        </router-link>
      </ul>  
    </footer>  -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    resPath:function(){
      let arr = this.$route.path.split('/');
      return arr[1]
    }
  }
}
</script>

<style lang="scss">
  @import './assets/sass/base.scss';

  .footer{
    width: 100%;
    height: rem(120px);
    display: block;
    position: fixed;
    bottom: 0;
    z-index: 999;
    background: #1C6132;
    color: #fff;
    .menu{
      display: block;
      width: 50%;
      float: left;
      font-size: rem(40px);
      line-height: rem(120px);
      text-align: center;
    }
    .mo{
      background: #40C664;
    }
  }
</style>
