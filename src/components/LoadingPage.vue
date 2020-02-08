<template>
  <div id="loading">
    <div class="box">
      <img src="../../static/images/loadingpage.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style lang="scss">
  @import '../assets/sass/base.scss';
  html{
    width: 100%;
    height: 100%;
    .box{
      width: 100%;
      height: 100%;
      display: flex;
      position: fixed;
      z-index: 998;
      justify-content: center;
      align-items: center;
      background: #fff;
      top: 0;
      img{
        width: 100%;
      }
    }
  }
  
</style>
