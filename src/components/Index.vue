<template>
  <div class="index">
    <!-- <h1>这里是主页</h1> -->
    <nav class="Menu">
      <ul>
        <router-link tag="li" to="/index/">全部</router-link>
        <router-link tag="li" to="/index/good">精华</router-link>
        <router-link tag="li" to="/index/week">week</router-link>
        <router-link tag="li" to="/index/share">分享</router-link>
        <router-link tag="li" to="/index/ask">问答</router-link>
        <router-link tag="li" to="/index/job">招聘</router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>
<style lang="scss">
  @import '../assets/sass/base.scss';
  .Menu{
    width: 100%;
    height: rem(100px);
    background: #F6F6F6;
    position: fixed;
    z-index: 999;
    top: 0;
    ul{
      display: flex;
      align-items: center;
      justify-content: center;
      li{
        width: 20%;
        height: rem(100px);
        // display: block;
        font-size: rem(40px);
        display: flex;
        align-items: center;
        justify-content: center;
        &.router-link-exact-active{
          color: #fff;
          background: #1C6132;
        }
      }
    }
  }
</style>