import axios from 'axios';

// 创建主要API接口前缀
let $http = axios.create({
  baseURL: 'https://www.vue-js.com/api/v1',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
});

// 获取顶部菜单数据
function getToplistData(options){
  // console.log("带的参数");
  // console.log(options);
  // 把接口参数合并起来 产生新的参数
  let newOpt = Object.assign({
    tab:'all',
    limit:20,
    page:1
  },options);
  // console.log("合并后的值")
  // console.log(newOpt)
  return $http({
    url:'/topics',
    params:newOpt
  });
}

// 获取列表详情数据
function getlistDetail(options){
  return $http({
    url:'/topic/' + options,
  })
}

export {getToplistData,getlistDetail}