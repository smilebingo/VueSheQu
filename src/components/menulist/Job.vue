<template>
  <div class="job">
    <list :datalist="datalist"></list>
    <infinite-loading v-if="isShow" @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import {getToplistData} from '@/api/api.js';
// 主题列表组件
import list from '@/components/menulist/List';
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'Job',
  data () {
    return {
      datalist: [],
      page:1,
      isShow:true
    }
  },
  mounted: function(){
    getToplistData({tab:'job',page:this.page,limit:20}).then((res)=>{
      this.datalist = res.data.data;
    })
  },
  methods: {
    infiniteHandler($state){
      setTimeout(()=>{
        getToplistData({tab:'job',page:++this.page,limit:20}).then((res)=>{
          let data = res.data.data;
          this.datalist = this.datalist.concat(data);
          if(data.length == 0){
            this.isShow = false;
            return;
          }
          $state.loaded();
        })
      },300)
    },
  },
  // 组件加载
  components:{
    list,InfiniteLoading
  }
}
</script>
<style scoped>
  @import '../../assets/sass/base.scss';

</style>